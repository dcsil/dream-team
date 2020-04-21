import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Card from "./components/Card/Card"
import Firestore from "./components/Firestore/Firestore";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AdminLayout from "layouts/Admin.js";
import AuthLayout from "layouts/Auth.js";
import LoginRegister from "views/examples/LoginRegister";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/firestore" render={() => <Firestore />} />
          <Route exact path="/card" render={() => <Card />} />
          <Route exact path="/login" render={() => <LoginRegister />} />
          <Route exact path="/register" render={() => <LoginRegister register />} />
          <Route path="/admin" render={props => <AdminLayout {...props} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;