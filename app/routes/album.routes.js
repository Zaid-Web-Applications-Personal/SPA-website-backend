const { verify } = require('crypto');
var VerifyToken = require('../misc/VerifyToken');

module.exports = app => {
  const album = require("../controller/album.controller");

  var router = require("express").Router();

  router.post("/", VerifyToken, album.createAlbum);

  router.post("/getAlbums", verify, album.findAllAlbums);

  router.get("/me", VerifyToken, album.me);


  app.use('/album', router);
};