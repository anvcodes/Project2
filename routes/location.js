var express = require("express");
var router = express.Router();

router.get("/routes/location", (req, res) => {
    db.Location.findAll({

    })
    .then(function(dbLocation){
        res.json(dbLocation);
    });
})

router.post("/api/location/post", (req, res) => {
    db.Location.create({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    }).then(function(dbLocation){
        res.json(dbLocation);
    });

    db.Location.post({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    }).then(function(dbLocation){
        res.json(dbLocation);
    });
})

router.put("/api/location/put", (req, res) => {
    db.Location.update({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    }).then(function(dbLocation){
        res.json(dbLocation);
    });
    res.send(`a put request with /user/put route on port ${PORT}`);
})

router.delete("/api/location/delete", (req, res) => {
    db.Location.destroy({
        longitude: req.body.longitude,
        latitude: req.body.latitude,
        city: req.body.city,
        state: req.body.state,
        venue: req.body.venue
    }).then(function(dbLocation){
        res.json(dbLocation);
    });
    res.send(`a delete request with /user/delete route on port ${PORT}`);
})

module.exports = router;
