var express = require("express");
var router = express.Router();

// var path = require("path");

// module.exports = function(app) {



router.get("/api", (req, res) => {
    console.log("This is the home page for users")
    res.render("index", {})
})

router.get("/api/profile", (req, res) => {
    console.log("This is the login page for users")
    res.render("profile", {})
})

router.get("/api/locations", (req, res) => {
    console.log("This is the location page for users")
    res.render("locations", {})
})

router.get("/api/matches", (req, res) => {
    console.log("This is the matches page for users")
    res.render("matches", {})
})

router.get("/api/messages", (req, res) => {
    console.log("This is the profile page for users")
    res.render("messages", {})
})




module.exports = router;