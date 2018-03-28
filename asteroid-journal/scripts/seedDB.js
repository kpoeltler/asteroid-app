const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://kpoeltler:bootcamp@ds139869.mlab.com:39869/heroku_6lfl8nwd",   
  {
    useMongoClient: true
  }
);

const journalSeed = [
  {
    asteroid: "",
    orbit:	"Aten asteroids",	
    reflection: " NEA with aphelion distances greate than 0",
    date: new Date(Date.now())
  },
  {
    asteroid: "Sisyphus",
    orbit: "Apollo",	
    reflection: " ",
    date: new Date(Date.now())
  },
  {
    asteroid: "433 Eros",	
    orbit: 	"Amor",	
    reflection: "n 2001, 433 Eros was the first asteroid to be extensively studied and ultimately landed upon by a space probe (the NEAR Shoemaker mission). ",
    date: new Date(Date.now())
  },
  {
    asteroid: "Kassandra",		
    orbit:	"",	
    reflection: " ",
    date: new Date(Date.now())
  },
];

db.Entry
  .remove({})
  .then(() => db.Entry.collection.insertMany(journalSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });