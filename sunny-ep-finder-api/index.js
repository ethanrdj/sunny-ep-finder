require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const episodeRouter = require("./src/routes/episode");

var cors = require("cors");

app.use(cors());

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// routes

app.use("/episode", episodeRouter);
