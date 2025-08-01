module.exports = (sequelize, DataTypes) => {
  return sequelize.define("estudiante", {
    nombre: DataTypes.STRING,
    carnet: DataTypes.STRING,
    correo: DataTypes.STRING
  });
};
