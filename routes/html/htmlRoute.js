var express = require("express");
var router = express.Router();

// var path = require("path");
 
// module.exports = function(app) {



app.get("/", (req, res) => {
    console.log("This is the home page for users")
    res.render("index.handlebars", {})
})

app.get("/profile", (req, res) => {
    db.User.create({
        name: req.body.name,
        age: req.body.age,
        region: req.body.region
    })
    console.log("This is the login page for users")
    res.render("profile.handlebars", {})
})

app.get("/locations", (req, res) => {
    console.log("This is the location page for users")
    res.render("locations.handlebars", {})
})

app.get("/matches", (req, res) => {
    console.log("This is the matches page for users")
    res.render("matches.handlebars", {})
})

app.get("/messages", (req, res) => {
    console.log("This is the profile page for users")
    res.render("messages.handlebars", {})
})




module.exports = router;