require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const episodeRouter = require("./routes/episode");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(err));
db.once("open", () => console.log("Connected to database"));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// routes

app.use("/episode", episodeRouter);
