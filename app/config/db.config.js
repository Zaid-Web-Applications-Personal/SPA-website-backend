module.exports = {
  HOST: "ec2-35-168-80-116.compute-1.amazonaws.com",
  USER: "dikzkzzbewnldd",
  port: '5432',
  PASSWORD: "a8abf15cdb1c72fdebde9d821ce04de5a59bcd38c457f22c78bb9af76af888a6",
  DB: "d1mn79bsnmcug7",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};