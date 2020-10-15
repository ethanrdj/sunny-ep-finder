import React from "react";
import EpisodeCard from "./EpisodeCard";
import "../styles/App.css";

function App() {
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
      />
    </div>
  );
}

export default App;
