import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Observations from "./pages/Observations";
import Journal from "./pages/Journal";
import Nav from "./components/Nav";
import User from "./pages/User";
import  './index.css';
// import style from "./style";

const App = () =>
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/observations" component={Observations} />
        <Route exact path="/observations/:id" component={Journal} />  
        //not sure what that is for :id
        
      </Switch>
    </div>
  </Router>;

export default App;
