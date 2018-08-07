import React from "react";
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
        <Route exact path="/observation" component={Observations} />
        <Route exact path="/observation/:id" component={Journal} />  
        
        
      </Switch>
    </div>
  </Router>

export default App;
