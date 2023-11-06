const uuid = require("uuid");
const path = require("path");
const fs = require("fs");
const { Op } = require("sequelize");

const {
  Superheroes,
  Superhero_images,
  ListSuperpowers,
} = require("../models/models");
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
      let {
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        listSuperpowers,
      } = req.body;
      const images = req.files;

      const superheroData = {
        nickname,
        real_name: realName,
        origin_description: originDescription,
        superpowers,
        catch_phrase: catchPhrase,
      };

      const Superhero = await Superheroes.create(superheroData);
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
      if (listSuperpowers) {
        listSuperpowers = JSON.parse(listSuperpowers);
        listSuperpowers.forEach((i) => {
          ListSuperpowers.create({
            titleSuperpower: i.titleSuperpower,
            value: i.value,
            superheroId: Superhero.id,
          });
        });
      }

      return res.status(201).json(Superhero);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async updateHero(req, res, next) {
    try {
      const {
        nickname,
        realName,
        originDescription,
        superpowers,
        catchPhrase,
        listSuperpowers,
        imageToDeleteId,
        imageToDelete,
      } = req.body;
      const images = req.files;
      const { id } = req.params;      
      const updatedData = {
        nickname: nickname,
        real_name: realName,
        origin_description: originDescription,
        superpowers: superpowers,
        catch_phrase: catchPhrase,
      };

      await Superheroes.update(updatedData, {
        where: { id: id },
      });

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

      if (listSuperpowers) {
        let parsedListSuperpowers = JSON.parse(listSuperpowers);

        try {
          await ListSuperpowers.destroy({
            where: { superheroId: id },
          });

          parsedListSuperpowers.forEach((i) => {
            ListSuperpowers.create({
              titleSuperpower: i.titleSuperpower,
              value: i.value,
              superheroId: id,
            });
          });
        } catch (error) {
          console.error("Error deleting superpowers:", error);
        }
      }

      if (images) {
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

      return res.status(200).json({ message: "Superhero updated" });
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
  async getAllHeroes(req, res) {
    try {
      let { limit, page, dateCreation, searchText } = req.query;
      page = page || 1;
      limit = limit || 5;
      dateCreation = dateCreation || "new";
      const offset = (page - 1) * limit;
      let orderByDate = "DESC";
      let searchResults;
      let totalCount;

      if (dateCreation === "old") {
        orderByDate = "ASC";
      }

      if (searchText !== "undefined") {
        searchResults = await Superheroes.findAll({
          include: [
            {
              model: Superhero_images,
              as: "SuperheroImages",
            },
          ],
          where: {
            [Op.or]: [
              { nickname: { [Op.like]: `%${searchText}%` } },
              { real_name: { [Op.like]: `%${searchText}%` } },
            ],
          },
          order: [["createdAt", orderByDate]],
          limit: Number(limit),
          offset: Number(offset),
        });

        totalCount = await Superheroes.count({
          where: {
            [Op.or]: [
              { nickname: { [Op.like]: `%${searchText}%` } },
              { real_name: { [Op.like]: `%${searchText}%` } },
            ],
          },
        });
      } else {
        totalCount = await Superheroes.count();
        searchResults = await Superheroes.findAll({
          include: [
            {
              model: Superhero_images,
              as: "SuperheroImages",
            },
          ],
          order: [["createdAt", orderByDate]],
          limit: Number(limit),
          offset: Number(offset),
        });
      }
      // searchResults = sortHeroes(searchResults, dateCreation)

      return res.json({
        total: totalCount,
        superheroes: searchResults,
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getOneHero(req, res) {
    const { id } = req.params;
    const superhero = await Superheroes.findOne({
      where: { id },
      include: [
        { model: Superhero_images, as: "SuperheroImages" },
        {
          model: ListSuperpowers,
          as: "listSuperpowers",
        },
      ],
    });
    return res.status(200).json(superhero);
  }

  async deleteHero(req, res) {
    try {
      const { id } = req.params;

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

      await ListSuperpowers.destroy({
        where: { superheroId: id },
      });

      return res.status(204).end();
    } catch (error) {
      next(ApiError.internal(error.message));
    }
  }
}

module.exports = new HeroController();
