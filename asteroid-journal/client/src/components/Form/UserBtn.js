import React from "react";

export const UserBtn = props =>
  <button {...props} style={{ float: "top", marginBottom: 10, background:'#b81d8c' }} className="btn btn-success">
    {props.children}
  </button>;

