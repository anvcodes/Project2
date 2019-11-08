const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// require("dotenv").config();
// var keys = require("./keys.js");




// routes
var user = require("/routes/api-user.js");
var location = require("/routes/api-locations.js");
var match = require("/routes/api-matches.js");
var match = require("/routes/locations.handlebars.js");
var match = require("/routes/profile.handlebars.js");
var match = require("/routes/matches.handlebars.js");
var match = require("/routes/messages.handlebars.js");
var match = require("/routes/login.handlebars.js");
app.use("/api-user", api-user);
app.use("/api-locations", api-locations);
app.use("/api-matches", api-matches);


app.listen(PORT, function() {
    console.log("App is listening on port " + PORT);
});