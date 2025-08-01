const db = require("../models");
const Estudiante = db.estudiante;

exports.create = async (req, res) => {
  try {
    const estudiante = await Estudiante.create(req.body);
    res.json(estudiante);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.findAll = async (req, res) => {
  const estudiantes = await Estudiante.findAll();
  res.json(estudiantes);
};

exports.findOne = async (req, res) => {
  const estudiante = await Estudiante.findByPk(req.params.id);
  estudiante ? res.json(estudiante) : res.status(404).send({ message: "No encontrado" });
};

exports.update = async (req, res) => {
  const [updated] = await Estudiante.update(req.body, { where: { id: req.params.id } });
  updated ? res.send({ message: "Actualizado" }) : res.status(404).send({ message: "No encontrado" });
};

exports.delete = async (req, res) => {
  const deleted = await Estudiante.destroy({ where: { id: req.params.id } });
  deleted ? res.send({ message: "Eliminado" }) : res.status(404).send({ message: "No encontrado" });
};
