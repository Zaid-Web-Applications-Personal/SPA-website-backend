module.exports = {
  HOST: "pintrest-sql-db.mysql.database.azure.com",
  USER: "zaidabdalkarim@pintrest-sql-db",
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