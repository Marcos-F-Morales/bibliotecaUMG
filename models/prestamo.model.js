module.exports = (sequelize, DataTypes) => {
  return sequelize.define("prestamo", {
    fechaPrestamo: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    fechaDevolucion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  });
};
