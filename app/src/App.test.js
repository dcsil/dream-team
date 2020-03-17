import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from "./App";

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("App renders login button on Home", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
