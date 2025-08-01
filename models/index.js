
const dbConfig = require("../config/db.config.js");


const Sequelize = require("sequelize");


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false  
    }
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;



// Cada uno de estos modelos define una tabla en la base de datos
db.libro = require("./libro.model.js")(sequelize, Sequelize);
db.estudiante = require("./estudiante.model.js")(sequelize, Sequelize);
db.prestamo = require("./prestamo.model.js")(sequelize, Sequelize);



// Un libro puede tener muchos préstamos (1:N)
db.libro.hasMany(db.prestamo, { foreignKey: "libroId" });
db.prestamo.belongsTo(db.libro, { foreignKey: "libroId" });

// Un estudiante puede tener muchos préstamos (1:N)
db.estudiante.hasMany(db.prestamo, { foreignKey: "estudianteId" });
db.prestamo.belongsTo(db.estudiante, { foreignKey: "estudianteId" });



module.exports = db;
