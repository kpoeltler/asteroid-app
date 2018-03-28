import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 630, clear: 'both', background:'#130712' }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
