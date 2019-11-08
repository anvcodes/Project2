const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// require("dotenv").config();
// var keys = require("./keys.js");




// routes
var user = require("./routes/user.js");
var location = require("./routes/location.js");
app.use("/user", user);
app.use("/location", location);