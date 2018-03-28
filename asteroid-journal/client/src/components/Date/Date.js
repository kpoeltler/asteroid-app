import React from "react";
import  './date.css';




const today = new Date();

// Printing a date like "June 2
const options = { month: 'long', day: 'numeric' };
console.log(today.toLocaleDateString('en-US', options));

// Advancing a date
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
console.log(tomorrow.toLocaleDateString('en-US', options));

// Unique string representing the date (but not the time)
console.log(today.toLocaleDateString());
console.log(tomorrow.toLocaleDateString());

// String to Date
const mayTheFourth = new Date("5/4/2017");
console.log(mayTheFourth.toLocaleDateString('en-US', options))