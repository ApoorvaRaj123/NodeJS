const mongoose = require("mongoose");
const shortid = require("shortid");

const urlSchema = new mongoose.Schema(
  {
    shortid: {
      type: String,
      required: true,
      unique: true,
    },
    redirectUrl: {
      type: String,
      required: true,
    },
    history: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);

const URL = mongoose.model("Url", urlSchema);

module.exports = URL;
