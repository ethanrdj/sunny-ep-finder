import React, { useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import "../styles/App.css";

const App = () => {
  const [episode, setEpisode] = useState([]);
  const [filteredSeries, setFilteredSeries] = useState("All");

  const handleRequest = () => {
    if (filteredSeries === "All") {
      axios
        .get("http://localhost:5000/episode/")
        .then(({ data }) => {
          console.log(data);
          setEpisode(data);
        })
        .catch((error) => console.log(error));
    } else {
      axios
        .get("http://localhost:5000/episode/filtered", {
          series: filteredSeries,
        })
        .then(({ data }) => {
          console.log(data);
          setEpisode(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  console.log(filteredSeries);
  return (
    <div className="App">
      <h1 className="main-header">The Gang Finds an Episode</h1>
      <h3>Can't decide what episode to watch?</h3>
      <h4>Click the button below to find one!</h4>
      <EpisodeCard
        series="1"
        episode="1"
        title="The Gang Gets Racist"
        date="September 1, 2005"
        directedBy="Dan Attias"
        writtenBy="Charlie Day"
        description="Really long description nnnnnnnnnn nnnnnnnnnnn nnnnnnnn nnnnnnnnnnn nnn nnnnnnnn nnnnnn nnnnnnn nnnnnnnn nnnnn nnn nnnn nnn nn"
        handleRequest={handleRequest}
        setFilteredSeries={setFilteredSeries}
      />
    </div>
  );
};

export default App;
