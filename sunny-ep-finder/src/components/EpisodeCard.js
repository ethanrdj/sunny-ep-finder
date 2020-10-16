import React from "react";

import "../styles/EpisodeCard.css";

const EpisodeCard = ({
  series,
  episode,
  title,
  date,
  directedBy,
  writtenBy,
  description,
  handleRequest,
  setFilteredSeries,
  foundEp,
}) => {
  const handleChange = (event) => {
    setFilteredSeries(event.target.value);
  };
  return (
    <div className="EpisodeCard">
      <button className="button-filter" onClick={() => handleRequest()}>
        IASIP
      </button>
      <label className="button-filter" htmlFor="filter">
        Series:
      </label>
      <select
        name="filter"
        id="filter"
        className="button-filter"
        onChange={handleChange}
      >
        <option>All</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
      </select>
      {foundEp.length === undefined && (
        <div className="result">
          <p className="title">
            <strong>{title}</strong>
          </p>
          <p className="series-ep">
            <strong>S</strong>
            {series}&nbsp;
            <strong>E</strong>
            {episode}
          </p>
          <p className="series-ep date">{date}</p>
          <br></br>
          <p className="dire-writ directedBy">
            <strong>Directed by:</strong>&nbsp;&nbsp;
            {directedBy}
          </p>
          <p className="dire-writ writtenBy">
            <strong>Written By:</strong>&nbsp;&nbsp;
            {writtenBy}
          </p>
          <p className="description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default EpisodeCard;
