const express = require("express");
const mongoose = require("mongoose");
const users = require("./MOCK_DATA.json");
const { type } = require("express/lib/response");
const {connectMongodb} = require("./connection");

const app = express();
const port = 3000;

//connection
connectMongodb("mongodb://127.0.0.1:27017/app-1")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Mongo error: " + err));

//Schema




app.listen(port, (req, res) => {
  console.log(`server listening on port ${port}`);
});
