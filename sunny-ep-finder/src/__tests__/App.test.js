import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

test("renders the main page", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ethan/i);
  expect(linkElement).toBeInTheDocument();
});
