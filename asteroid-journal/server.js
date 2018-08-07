const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const ObjectID = require('mongodb').ObjectID;
const User = require("./models/user");

// **Configure body parser for AJAX requests shouldn't this be Axios?
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(logger("dev"));
//not sure what dev is?
// User.create(user)
// .then(function(dbUser){
//   res.json(dbUser);
// })
// .catch(function(err) {
//   res.json(err);
// });

// **Serve up static assets
app.use(express.static("client/build"));



// **Add routes, both API and view
app.use(routes);

// **Set up promises with mongoose
mongoose.Promise = global.Promise;

// **Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URL || "mongodb://localhost/entries",
//   {
//     useMongoClient: true
//   }
// );

// **Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// "mongodb://kpoeltler:bootcamp@ds139869.mlab.com:39869/heroku_6lfl8nwd",