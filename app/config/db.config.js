module.exports = {
  HOST: "pintrest-spa.database.windows.net",
  USER: "zaidabdalkarim",
  port: '1433',
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