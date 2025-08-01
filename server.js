// Importamos los módulos necesarios
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Opciones de CORS
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Middleware para parsear requests JSON y formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Importamos los modelos desde la carpeta correcta
const db = require("./app/models");

// Sincronizamos con la base de datos (crear tablas si no existen)
db.sequelize.sync().then(() => {
  console.log("✅ Base de datos sincronizada");
});

// Ruta raíz simple para comprobar que el servidor responde
app.get("/", (req, res) => {
  res.json({ message: "API Biblioteca UMG - OK" });
});

// Rutas de la API
require("./app/routes/libro.routes")(app);
require("./app/routes/estudiante.routes")(app);
require("./app/routes/prestamo.routes")(app);

// Puerto del servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
