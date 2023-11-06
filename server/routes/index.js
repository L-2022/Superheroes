const Router = require("express");
const router = new Router();
const heroesRouter = require("./heroesRouter");
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

router.use("/heroes", heroesRouter);

module.exports = router;
