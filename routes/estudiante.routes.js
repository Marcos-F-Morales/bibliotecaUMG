module.exports = app => {
  const estudiantes = require("../controllers/estudiante.controller");
  const router = require("express").Router();

  router.post("/", estudiantes.create);
  router.get("/", estudiantes.findAll);
  router.get("/:id", estudiantes.findOne);
  router.put("/:id", estudiantes.update);
  router.delete("/:id", estudiantes.delete);

  app.use("/estudiantes", router);
};
