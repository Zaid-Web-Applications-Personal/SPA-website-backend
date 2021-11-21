const db = require("../models");
const Image = db.image;
const Album = db.album;
// const Op = db.Sequelize.Op;

Image.belongsTo(Album, {
  foreignKey: 'albumId',
});

exports.createImage = (req, res) => {
  console.log(req.body.name)
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a user
  const user = {
    name: req.body.name,
    image_url: req.body.image_url,
    albumId: req.body.id,
    include: [
      {model: Album}
    ]
    // user: req.body.id,
  };

  console.log(user)

  Image.create(user)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user."
      });
    });
};

exports.findAllImages = (req, res) => {
  Image.findAll({include: [Album], where: {albumId: req.params.id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving users."
      });
    });
};

exports.me = (req, res) => {
  res.status(200).send({string: "You did it!"})
}