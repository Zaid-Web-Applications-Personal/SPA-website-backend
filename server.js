const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

// db.sequelize.sync(); prod

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
}); // dev

app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/album.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/image.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});