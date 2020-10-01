const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: { type: String, required: true },
  isImportant: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
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
