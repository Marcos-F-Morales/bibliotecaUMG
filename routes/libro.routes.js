module.exports = app => {
  const libros = require("../controllers/libro.controller");
  const router = require("express").Router();

  router.post("/", libros.create);
  router.get("/", libros.findAll);
  router.get("/:id", libros.findOne);
  router.put("/:id", libros.update);
  router.delete("/:id", libros.delete);

  app.use("/libros", router);
};
