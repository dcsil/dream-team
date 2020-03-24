import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import {commonRenderTest} from "CommonRenderTest"

test("App renders dreamtune title on Home", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Dreamtune/i);
  expect(linkElement).toBeInTheDocument();
});



commonRenderTest.bind(this)(App)
