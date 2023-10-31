const express = require("express");
const movieController = require("../controllers/movie.js");

const router = express.Router();

//Controlador Movie
router.get("/", movieController.index);
router.post("/db_1", movieController.create_db1);
router.post("/db_2", movieController.create_db2);
router.delete("/db_1/remove", movieController.remove_db1);
router.delete("/db_2/remove", movieController.remove_db2);

module.exports = router;