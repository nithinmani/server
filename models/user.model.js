const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    quote: { type: String, required: true },
    dop: { type: String },
    vop: { type: String },
    stockVol: { type: String },
    company: { type: String },
  },
  { collection: "user-data" }
);

const model = mongoose.model("UserData", User);

module.exports = model;
