import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Map from "./components/Map/Map";
import Card from "./components/Card/Card"
import Firestore from "./components/Firestore/Firestore";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/firestore" render={() => <Firestore />} />
          <Route exact path="/map" render={() => <Map />} />
          <Route exact path="/card" render={() => <Card />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;