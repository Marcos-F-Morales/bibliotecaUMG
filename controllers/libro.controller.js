const db = require("../models");
const Libro = db.libro;

exports.create = async (req, res) => {
  try {
    const libro = await Libro.create(req.body);
    res.json(libro);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  const libros = await Libro.findAll();
  res.json(libros);
};

exports.findOne = async (req, res) => {
  const libro = await Libro.findByPk(req.params.id);
  libro ? res.json(libro) : res.status(404).send({ message: "No encontrado" });
};

exports.update = async (req, res) => {
  const [updated] = await Libro.update(req.body, { where: { id: req.params.id } });
  updated ? res.send({ message: "Actualizado" }) : res.status(404).send({ message: "No encontrado" });
};

exports.delete = async (req, res) => {
  const deleted = await Libro.destroy({ where: { id: req.params.id } });
  deleted ? res.send({ message: "Eliminado" }) : res.status(404).send({ message: "No encontrado" });
};
