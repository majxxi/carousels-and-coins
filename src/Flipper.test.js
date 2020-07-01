import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Flipper from "./Flipper";

beforeEach(function() {
  jest
    .spyOn(Math, "random")
    .mockReturnValueOnce(0.25)
    .mockReturnValueOnce(0.75);
});

it("renders without crashing", function() {
  render(<Flipper />);
});

it("matches snapshot", function() {
  const {asFragment} = render(<Flipper />);
  expect(asFragment()).toMatchSnapshot();
});

it("shouldn't show a coin in the beginning", function() {
  const { getByText, queryByAltText, queryByTestId } = render(<Flipper />);

  expect(queryByAltText("head")).not.toBeInTheDocument();

  expect(getByText("Out of 0 flips, there have been 0 heads and 0 tails.")).toBeInTheDocument();

  const flipButton = queryByTestId("button");
  fireEvent.click(flipButton);

  //expect(queryByAltText("head")).toBeInTheDocument();
  expect(queryByAltText("tail")).not.toBeInTheDocument();

  expect(getByText("Out of 1 flips, there have been 1 heads and 0 tails.")).toBeInTheDocument();


});

it("shows a coin", function() {
  const { asFragment } = render(<Flipper side="head" />);
  expect(asFragment()).toMatchSnapshot();
});

afterEach(function() {
  Math.random.mockRestore();
});