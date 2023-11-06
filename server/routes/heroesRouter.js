const Router = require("express");
const router = new Router();
const heroesController = require("../controllers/heroesController");
const { validateCreateHero } = require("../middleware/validateCreateHero"); 
// router.post("/create", heroesController.createHero);
// router.put("/changeHero/:id", heroesController.changeHero);
// router.get("/", heroesController.getAll);
// router.get("/:id", heroesController.getOne);
// router.delete("/:id", heroesController.dellHero);

/**
 * @swagger
 * /api/heroes:
 *   post:
 *     summary: Create a new superhero
 *     description: Creates a new superhero with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: The superhero's nickname.
 *               realName:
 *                 type: string
 *                 description: The superhero's real name.
 *               originDescription:
 *                 type: string
 *                 description: Description of the superhero's origin.
 *               superpowers:
 *                 type: string
 *                 description: Superpowers of the superhero.
 *               catchPhrase:
 *                 type: string
 *                 description: The superhero's catchphrase.
 *     responses:
 *       '201':
 *         description: The superhero has been successfully created.
 *       '400':
 *         description: Invalid request data.
 *       '500':
 *         description: Server error.
 */

router.post("/", validateCreateHero,  heroesController.createHero);

/**
 * @swagger
 * /api/heroes/{id}:
 *   put:
 *     summary: Update a superhero by ID
 *     description: Updates an existing superhero with the provided data.
 *     tags: [Superheroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           required: true
 *           description: ID of the superhero to update.
 *         description: Numeric ID of the superhero to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nickname:
 *                 type: string
 *                 description: The superhero's nickname.
 *               realName:
 *                 type: string
 *                 description: The superhero's real name.
 *               originDescription:
 *                 type: string
 *                 description: Description of the superhero's origin.
 *               superpowers:
 *                 type: string
 *                 description: Superpowers of the superhero.
 *               catchPhrase:
 *                 type: string
 *                 description: The superhero's catchphrase.
 *     responses:
 *       '200':
 *         description: The superhero has been successfully updated.
 *       '400':
 *         description: Invalid request data.
 *       '500':
 *         description: Server error.
 */

router.put("/:id", validateCreateHero,  heroesController.updateHero);

/**
 * @swagger
 * /api/heroes:
 *   get:
 *     summary: Get a list of superheroes
 *     description: Retrieves a list of all superheroes.
 *     tags: [Superheroes]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           description: Number of superheroes to retrieve (default is 6).
 *         description: Limit the number of superheroes returned.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           description: Page number for paginated results (default is 1).
 *         description: Page number for pagination.
 *     responses:
 *       '200':
 *         description: A list of superheroes.
 *       '500':
 *         description: Server error.
 */

router.get("/", heroesController.getAllHeroes);

/**
 * @swagger
 * /api/heroes/{id}:
 *   get:
 *     summary: Get a superhero by ID
 *     description: Retrieves a superhero by their ID.
 *     tags: [Superheroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           required: true
 *           description: ID of the superhero to retrieve.
 *         description: Numeric ID of the superhero to retrieve.
 *     responses:
 *       '200':
 *         description: The requested superhero.
 *       '404':
 *         description: Superhero not found.
 *       '500':
 *         description: Server error.
 */

router.get("/:id", heroesController.getOneHero);

/**
 * @swagger
 * /api/heroes/{id}:
 *   delete:
 *     summary: Delete a superhero by ID
 *     description: Deletes a superhero by their ID.
 *     tags: [Superheroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           required: true
 *           description: ID of the superhero to delete.
 *         description: Numeric ID of the superhero to delete.
 *     responses:
 *       '204':
 *         description: Superhero successfully deleted.
 *       '404':
 *         description: Superhero not found.
 *       '500':
 *         description: Server error.
 */

router.delete("/:id", heroesController.deleteHero);

module.exports = router;
