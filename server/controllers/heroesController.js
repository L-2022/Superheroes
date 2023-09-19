const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

const { Superheroes, Superhero_images } = require("../models/models");
const ApiError = require("../error/ApiError");

async function deleteImage(filename) {
  const directoryPath = path.join(__dirname, "..", "static");
  const filePath = path.join(directoryPath, filename);

  try {
    await fs.promises.unlink(filePath);
    console.log("File deleted successfully:", filePath);
  } catch (error) {
    console.error("Error occurred while deleting the file:", error);
  }
}

class HeroController {
  async createHero(req, res, next) {
    try {
      const {
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
      } = req.body;
      const images = req.files;

      const Superhero = await Superheroes.create({
        nickname: nickname,
        real_name: realName,
        origin_description: originDescription,
        superpowers: superpowers,
        catch_phrase: catchPhrase,
      });
      if (images) {
        const imageKeys = Object.keys(images);

        imageKeys.forEach((key) => {
          const imageSuperhero = images[key];
          const fileName = uuid.v4() + ".jpg";
          imageSuperhero.mv(path.resolve(__dirname, "..", "static", fileName));
          Superhero_images.create({
            image: fileName,
            superheroId: Superhero.id,
          });
        });
      }
      return res.json(Superhero);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async changeHero(req, res, next) {
    try {
      const {
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        imageToDeleteId,
        imageToDelete,
      } = req.body;
      const images = req.files;
      const { id } = req.params;

      const [updatedRows] = await Superheroes.update(
        {
          nickname: nickname,
          real_name: realName,
          origin_description: originDescription,
          superpowers: superpowers,
          catch_phrase: catchPhrase,
        },
        {
          where: { id: id },
        }
      );

      if (imageToDelete) {
        if (typeof imageToDeleteId == "string") {
          try {
            await Superhero_images.destroy({
              where: { superheroId: id, id: imageToDeleteId },
            });
          } catch (error) {
            console.error("Error deleting photo:", error);
          }
          deleteImage(imageToDelete);
        } else {
          imageToDelete.forEach((image) => {
            deleteImage(image);

          });
          imageToDeleteId.forEach(async (imageId) => {
            try {
              await Superhero_images.destroy({
                where: { superheroId: id, id: imageId },
              });
            } catch (error) {
              console.error("Error deleting photo:", error);
            }
          });
        }
      }

      if (images) { //Create added image
        const imageKeys = Object.keys(images);
        imageKeys.forEach((key) => {
          const imageSuperhero = images[key];
          const fileName = uuid.v4() + ".jpg";
          imageSuperhero.mv(path.resolve(__dirname, "..", "static", fileName));
          Superhero_images.create({
            image: fileName,
            superheroId: id,
          });
        });
      }

      return res.json({ message: "Супергероя оновлено" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getAll(req, res) {
    try {
      let { limit, page } = req.query;
      page = page || 1;
      limit = limit || 6;
      const offset = (page - 1) * limit;

      const count = await Superheroes.count(); // number of heroes

      const listSuperheroes = await Superheroes.findAll({
        include: [
          {
            model: Superhero_images,
            as: "SuperheroImages",
          },
        ],
        limit: Number(limit),
        offset: Number(offset),
      });

      return res.json({
        total: count,
        superheroes: listSuperheroes,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getOne(req, res) {
    const { id } = req.params;
    const superhero = await Superheroes.findOne({
      where: { id },
      include: [{ model: Superhero_images, as: "SuperheroImages" }],
    });
    return res.json(superhero);
  }

  async dellHero(req, res) {
    try {
      const { id } = req.params;

      // all photos associated with the hero for his ID
      const superhero = await Superheroes.findOne({
        where: { id },
        include: [{ model: Superhero_images, as: "SuperheroImages" }],
      });

      if (!superhero) {
        return res.status(404).json({ message: "Hero not found" });
      }

      superhero.SuperheroImages.forEach(async (image) => {
        deleteImage(image.image);
      });

      await Superheroes.destroy({
        where: { id },
        include: [{ model: Superhero_images, as: "SuperheroImages" }],
      });

      return res.status(204).end(); // успішне видалення
    } catch (error) {
      console.error("Error deleting hero:", error);
      return res.status(500).json({ message: "Server error" });
    }
  }
}

module.exports = new HeroController();
