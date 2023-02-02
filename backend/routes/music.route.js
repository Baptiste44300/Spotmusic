
const musicController = require("../controllers/music.controller");

const Router = require ("express").Router();

Router.get("/", musicController.getAll)
Router.get("/:id", musicController.getById)
Router.post("/", musicController.createMusic)
Router.put("/:id", musicController.updateMusic)
Router.delete("/:id", musicController.deleteMusic)


module.exports=Router;