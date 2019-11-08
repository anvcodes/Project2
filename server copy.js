const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// require("dotenv").config();
// var keys = require("./keys.js");




// user routes
var user = require("./routes/user.js");
var location = require("./routes/location.js");
app.use("/user", user);
app.use("/location", location);



app.listen(PORT, function() {
    console.log(`Server started on port ${PORT}`);
});