import React from "react";
import ReactDOM from 'react-dom';
import Firestore from "./Firestore";

it('Firestore renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Firestore />, div);
});
