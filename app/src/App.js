import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Map from "./components/Map/Map";
import Card from "./components/Card/Card"
import VenueTable from "./components/VenueTable/VenueTable";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/register" render={() => <Register />} />
          <Route exact path="/map" render={() => <Map />} />
          <Route exact path="/cards" render={() => <Card />} />
          <Route exact path="/VenueTable" render={() => <VenueTable />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
