import React, { useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import Quote from "./Quote";
import mac from "../images/mac.png";
import "../styles/App.css";

const App = () => {
  const [episode, setEpisode] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState("All");

  const handleRequest = async () => {
    if (filteredSeries === "All") {
      await axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://sunny-ep-finder-api.herokuapp.com/episode/"
        )
        .then(({ data }) => {
          setEpisode(data);
        })
        .catch((error) => console.log(error));
    } else {
      await axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://sunny-ep-finder-api.herokuapp.com/episode/filtered/",
          { params: { series: filteredSeries } }
        )
        .then(({ data }) => {
          setEpisode(data);
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  return (
    <div className="App">
      <h1 className="main-header">The Gang Finds an Episode</h1>
      <h2>Can't decide which episode to watch?</h2>
      <h3>Click the button below to find one!</h3>
      <EpisodeCard
        series={episode.series}
        episode={episode.episode}
        title={episode.title}
        date={episode.date}
        directedBy={episode.directedBy}
        writtenBy={episode.writtenBy}
        description={episode.description}
        handleRequest={handleRequest}
        setFilteredSeries={setFilteredSeries}
        foundEp={episode}
      />
      <img src={mac} alt="mac" className="mac"></img>

      <Quote />

      <p className="me">The Gang Find an Episode © 2020 | Ethan Davis</p>
    </div>
  );
};

export default App;
