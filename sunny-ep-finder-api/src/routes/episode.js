const express = require("express");
const router = express();
const Episode = require("../models/episode");

// add episode

router.post("/", async (req, res) => {
  const episode = await Episode({
    series: req.body.series,
    episode: req.body.episode,
    title: req.body.title,
    date: req.body.date,
    directedBy: req.body.directedBy,
    writtenBy: req.body.writtenBy,
    description: req.body.description,
  });

  try {
    const newEpisode = await episode.save();
    res.status(201).json(newEpisode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get random quote

router.get("/", async (req, res) => {
  try {
    const episodes = await Episode.find();
    const randomEpisode = await episodes[
      Math.floor(Math.random() * episodes.length)
    ];
    res.status(200).json(randomEpisode);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/filtered", async (req, res) => {
  const series = req.query.series;

  const selectedSeries = await Episode.find({ series: series });
  const randomSeriesEpisode = await selectedSeries[
    Math.floor(Math.random() * selectedSeries.length)
  ];
  try {
    res.status(200).json(randomSeriesEpisode);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
