const db = require("../models");
const Prestamo = db.prestamo;
const Libro = db.libro;

exports.create = async (req, res) => {
  try {
    const libro = await Libro.findByPk(req.body.libroId);
    if (!libro || !libro.disponible) return res.status(400).send({ message: "Libro no disponible" });

    const prestamo = await Prestamo.create(req.body);
    await libro.update({ disponible: false });
    res.json(prestamo);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.marcarDevuelto = async (req, res) => {
  const prestamo = await Prestamo.findByPk(req.params.id);
  if (!prestamo) return res.status(404).send({ message: "No encontrado" });

  prestamo.fechaDevolucion = new Date();
  await prestamo.save();

  const libro = await db.libro.findByPk(prestamo.libroId);
  if (libro) await libro.update({ disponible: true });

  res.send({ message: "Libro devuelto" });
};

exports.getByEstudiante = async (req, res) => {
  const prestamos = await Prestamo.findAll({
    where: { estudianteId: req.params.id },
    include: [db.libro]
  });
  res.json(prestamos);
};
