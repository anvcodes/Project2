var express = require("express");
var router = express.Router();
<<<<<<< HEAD
var db = require("./../models/index");

router.get("/location", (req, res) => {
    db.Location.findAll({
=======
var db = require("./../models/index.js");

>>>>>>> master

router.get("/location", (req, res) => {
    db.locations.findAll({})
    .then(function(dbLocation){
        res.json(dbLocation);
    });
<<<<<<< HEAD
})

router.post("/location", (req, res) => {
    db.locations.create({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    }).then(function(dbLocation){
        res.json(dbLocation);
    });

  
=======
});

router.post("/location", (req, res) => {
    db.locations.create({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    }).then(function(dbLocation){
        res.json(dbLocation);
    });
>>>>>>> master
})

router.put("/location/:id", (req, res) => {
    db.locations.update({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    },{
        where: {
            id: req.params.id
          }
    }).then(function(dbLocation){
        res.json(dbLocation);
    });
})

router.delete("/location/:id", (req, res) => {
    db.locations.destroy({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    }).then(function(dbLocation){
        res.json(dbLocation);
    });
})

module.exports = router;
