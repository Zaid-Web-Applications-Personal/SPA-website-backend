module.exports = {
  HOST: "pintrest-spa.database.windows.net",
  port: '1433',
  USER: "zaidabdalkarim",
  PASSWORD: "Azswsixllo9.",
  DB: "newdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};