import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Redirect, Route, Switch } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Users from "./Users";
import Navbar from "./component/Navbar";
import "./App.css";
import Service from "./Services";

const App = () =>{
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/"  component={Home}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/users" component={Users}/>
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App;