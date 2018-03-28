//If you want to add additional keys later, use the Schema#add method.

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entrySchema = new Schema({
  asteroid: {
    type: String,
    trim: true,
    required: "To travel beyond the event horizen we need an asteroid's name"
  },
  orbit: {
    type: String,
    trim: true,
    required: false
  },
  reflection: {
    type: String,
    validate: [
      function(input) {
        return input.length >= 10;
      },
      "Typing notes may prevent information blackholes."
    ],
    trim: true,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;
