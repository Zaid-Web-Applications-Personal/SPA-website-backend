const db = require("../models");
const User = db.user;
const Album = db.album;
// const Op = db.Sequelize.Op;

Album.belongsTo(User, {
  foreignKey: 'userId',
});

exports.createAlbum = (req, res) => {
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
    date: Date.now(),
    image: req.body.image,
    userId: req.body.id,
    include: [
      {model: User}
    ]
    // user: req.body.id,
  };

  console.log(user)

  Album.create(user)
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

exports.findAllAlbums = async(req, res) => {
  var hello = await User.findByPk(req.body.id)
  console.log(hello)
  Album.findAll({include: [User], where: {userId: req.body.id}})
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