import React from "react";
import { render } from "@testing-library/react";
import ReactDOM from 'react-dom';
import App from "./App";

test("App renders dreamtune title on Home", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Dreamtune/i);
  expect(linkElement).toBeInTheDocument();
});

export const commonRenderTest = function(Component) {
  global.URL.createObjectURL = jest.fn();
  if (typeof window.URL.createObjectURL === 'undefined') { 
    Object.defineProperty(window.URL, 'createObjectURL', { value: 'results'})
  }
  global.URL.createObjectURL = jest.fn(() => 'details');
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Component />, div);
  });
};

commonRenderTest.bind(this)(App)
