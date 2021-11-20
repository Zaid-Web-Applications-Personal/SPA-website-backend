module.exports = {
  HOST: "pintrest-sql-database.mysql.database.azure.com",
  USER: "zaidabdalkarim@pintrest-sql-database",
  port: '3306',
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