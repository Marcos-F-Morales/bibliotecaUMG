module.exports = app => {
  const prestamos = require("../controllers/prestamo.controller");
  const router = require("express").Router();

  router.post("/", prestamos.create);
  router.put("/:id", prestamos.marcarDevuelto);
  router.get("/estudiante/:id", prestamos.getByEstudiante);

  app.use("/prestamos", router);
};
