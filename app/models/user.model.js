module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("user", {
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  });


  User.associate = (models) => {
    User.hasMany(models.Album);
  };

  return User;
};

// associate -> projects... count of the projects
// stuff thats not needed for the front end dont add it.


// associate -> album -> images.
// album.
// to create a album u must be logged in.