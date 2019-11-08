const express = require("express");
const path = require("path");
const hbs = require("express-handlebars");


const app = express();
const PORT = process.env.PORT || 3000;

// require("dotenv").config();
// var keys = require("./keys.js");

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// routes
var user = require("./routes/user.js");
var location = require("./routes/location.js");
var htmlRoute = require("./routes/html/htmlRoute.js");
// app.use("/user", user);
// app.use("/location", location);
app.use("/", htmlRoute);


app.listen(PORT, function() {
    console.log("App is listening on port " + PORT);
});
