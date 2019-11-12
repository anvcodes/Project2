var express = require("express");
var router = express.Router();
// var db = require("../models");
// var path = require("path");


router.get("/api", (req, res) => {
   
    console.log("This is the home page for users");
    
});

router.get("/api/profile", (req, res) => {
    console.log("This is the login page for users");
    
})

router.get("/api/locations", (req, res) => {
    console.log("This is Brookln");
   
})

router.get("/api/matches", (req, res) => {
    console.log("This is the matches page for users");
  
})

router.get("/api/messages", (req, res) => {
    console.log("This is the profile page for users");
    
})


router.get("/api/profileBuild", (req, res) => {
    console.log("This is the profile page for users");
    
})



module.exports = router;




        // { "longitude": "40.655136",
        // "latitude": "-73.959764",
        // "city": "Brooklyn",
        // "state": "New York",
        // "venue": "Zombie Lounge"}


        // { "longitude": "40.555136",
        // "latitude": "-73.969764",
        // "city": "Brooklyn",
        // "state": "New York",
        // "venue": "Zurilee"}



        // { "longitude": "40.53136",
        // "latitude": "-73.9687643",
        // "city": "Brooklyn",
        // "state": "New York",
        // "venue": "Westburry Inn"}




        // { "longitude": "41.353136",
        // "latitude": "-73.9787643",
        // "city": "Brooklyn",
        // "state": "New York",
        // "venue": "Parkside"}



        // { "longitude": "41.42136",
        // "latitude": "-73.7687643",
        // "city": "Brooklyn",
        // "state": "New York",
        // "venue": "Caribbean Social"}


        // { "longitude": "40.555136",
        // "latitude": "-73.96764",
        // "city": "Brooklyn",
        // "state": "New York",
        // "venue": "Mango Seeds"}