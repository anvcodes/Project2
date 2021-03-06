var express = require("express");
var router = express.Router();

 var path = require("path");
 
// module.exports = function(app) {



router.get("/",(req, res) => {
    console.log("This is the home page for users")
    res.render("index.handlebars", {})
})

router.get("/profile", (req, res) => {
    console.log("This is the login page for users")
    res.render("profile.handlebars", {});
})

router.get("/locations", (req, res) => {
    console.log("This is the location page for users")
    res.render("locations.handlebars", {})
})

router.get("/matches", (req, res) => {
    console.log("This is the matches page for users")
    res.render("matches.handlebars", {})
})

router.get("/messages", (req, res) => {
    console.log("This is the profile page for users")
    res.render("messages.handlebars", {})
})

router.get("/profileBuilder", (req, res) => {
    console.log("This is the profile page for users")
    res.render("profileBuilder.handlebars", {})
})




module.exports = router;