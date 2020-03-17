import React from "react";
import ReactDOM from 'react-dom';
import VenueTable from "./VenueTable";

global.URL.createObjectURL = jest.fn();

it('VenueTable renders without crashing', () => {
  const div = document.createElement('div');
  if (typeof window.URL.createObjectURL === 'undefined') { 
    Object.defineProperty(window.URL, 'createObjectURL', { value: 'results'})
  }
  global.URL.createObjectURL = jest.fn(() => 'details');
  ReactDOM.render(<VenueTable />, div);
});
