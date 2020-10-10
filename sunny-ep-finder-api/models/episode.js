const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema({
  series: {
    type: Number,
    required: true,
  },
  episode: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  directedBy: {
    type: String,
    required: true,
  },
  writtenBy: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Episode = mongoose.model("Episode", episodeSchema);

module.exports = Episode;
