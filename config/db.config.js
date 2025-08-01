module.exports = {
  HOST: "ep-long-wave-adjn7has-pooler.c-2.us-east-1.aws.neon.tech", // HOST de la conexión
  USER: "neondb_owner", // Usuario
  PASSWORD: "npg_vpyfU8FPjo4Knpg_rEUPWSuj76eZ", // Contraseña
  DB: "neondb", // Nombre de la base de datos
  dialect: "postgres",
  pool: { 
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};