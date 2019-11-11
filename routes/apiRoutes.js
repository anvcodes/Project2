var express = require("express");
var router = express.Router();
// var db = require("../models");
// var path = require("path");


router.get("/api", (req, res) => {
   
    console.log("This is the home page for users")
    
})

router.get("/api/profile", (req, res) => {
    console.log("This is the login page for users");
    
})

router.get("/api/locations", (req, res) => {
    console.log("This is the location page for users")
   
})

router.get("/api/matches", (req, res) => {
    console.log("This is the matches page for users")
  
})

router.get("/api/messages", (req, res) => {
    console.log("This is the profile page for users")
    
})



module.exports = router;