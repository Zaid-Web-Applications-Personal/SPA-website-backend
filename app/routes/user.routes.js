module.exports = app => {
  const user = require("../controller/user.controller");

  var router = require("express").Router();

  // Create a new user
  router.post("/", user.create);
  router.post("/login", user.login);
  router.post("/logout", user.logout);
  // router.post("/project", user.createProject);

  // Retrieve all user
  router.get("/", user.findAll);
  // router.get("/project", user.findAllProjects);

  // Retrieve all published user
  router.get("/published", user.findAllPublished);

  // Retrieve a single user with id
  router.get("/", user.findOne);

  // Update a user with id
  router.put("/:id", user.update);

  // Delete a user with id
  router.delete("/:id", user.delete);

  // Delete all user
  router.delete("/", user.deleteAll);

  app.use('/user', router);
};