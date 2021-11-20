module.exports = (sequelize, Sequelize) => {
  const Album = sequelize.define("album", {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    private: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    date: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });

  Album.associate = (models) => {
    Album.hasMany(models.Image);
  };

  return Album;
};