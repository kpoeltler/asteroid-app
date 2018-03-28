import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ float: "center", marginBottom: 10, background:'#af2980' }} className="btn btn-success">
    {props.children}
  </button>;
