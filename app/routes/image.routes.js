var VerifyToken = require('../misc/VerifyToken');

module.exports = app => {
  const project = require("../controller/image.controller");

  var router = require("express").Router();

  router.post("/", VerifyToken, project.createImage);

  router.get("/album/:id", project.findAllImages);

  // router.get("/:id", project.findAllImages);

  // router.get("/me", VerifyToken, project.me);


  app.use('/image', router);
};