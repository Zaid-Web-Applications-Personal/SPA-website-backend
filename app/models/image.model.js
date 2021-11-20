module.exports = (sequelize, Sequelize) => {
  const Image = sequelize.define("image", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    image_url: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });

  return Image;
};