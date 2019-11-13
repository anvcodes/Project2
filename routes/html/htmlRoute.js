var express = require("express");
var router = express.Router();

var path = require("path");



router.get("/",(req, res) => {
    console.log("This is the home page for users")
    res.render("index", {
        name: "name"
    })
})

router.get("/profile", (req, res) => {
    console.log("This is the login page for users")
    res.render("profile", {});
})

router.get("/locations", (req, res) => {
    console.log("This is the location page for users")
    res.render("locations", {})
})

router.get("/matches", (req, res) => {
    console.log("This is the matches page for users")
    res.render("matches", {})
})

router.get("/messages", (req, res) => {
    console.log("This is the profile page for users")
    res.render("messages", {})
})

router.get("/profileBuild", (req, res) => {
    console.log("This is the profile page for users")
    res.render("profileBuild", {})
})

router.get("/profileBuilder", (req, res) => {
    console.log("This is the profile page for users")
    res.render("profileBuilder.handlebars", {})
})




module.exports = router;