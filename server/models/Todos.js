const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: { type: String, required: true },
  created_at: {
    type: Date,
    default: new Date().toISOString(),
  },
  updated_at: {
    type: Date,
    default: new Date().toISOString(),
  },
});

module.exports = mongoose.model("Bets", todoSchema);
