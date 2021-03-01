import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EpisodeCard from "../components/EpisodeCard";

describe("EpisodeCard", () => {
  const episode = {
    series: 1,
    episode: 1,
    title: "test title",
    date: "test date",
    directedBy: "Someone",
    writtenBy: "someone else",
    description: "Its a TV show",
  };

  it("renders the correct props on the page", () => {
    const { asFragment } = render(
      <EpisodeCard episode={episode} foundEp="1" />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
