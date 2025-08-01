module.exports = (sequelize, DataTypes) => {
  return sequelize.define("libro", {
    titulo: DataTypes.STRING,
    autor: DataTypes.STRING,
    anioPublicacion: DataTypes.INTEGER,
    genero: DataTypes.STRING,
    disponible: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
