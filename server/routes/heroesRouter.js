const Router = require("express");
const router = new Router();
const heroesController = require("../controllers/heroesController");
router.post("/create", heroesController.createHero);
router.put("/changeHero/:id", heroesController.changeHero);
router.get("/", heroesController.getAll);
router.get("/:id", heroesController.getOne);
router.delete("/:id", heroesController.dellHero);

module.exports = router;
