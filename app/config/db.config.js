module.exports = {
  HOST: "pintrest-spa.database.windows.net",
  USER: "root",
  PASSWORD: "123456",
  DB: "newdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};