const express = require("express");
const movieController = require("../controllers/movie.js");

const router = express.Router();

//Controlador Movie
router.get("/", movieController.index);
router.post("/add", movieController.create);
router.post("/remove", movieController.remove);

module.exports = router;