import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login/Login";

test("renders login button on Home", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
