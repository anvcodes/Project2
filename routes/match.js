var express = require("express");
var router = express.Router();
var db = require("./../models/index.js");


router.get("/matches", (req, res) => {
    db.Matches.findAll({})
    .then(function(dbMatches){
        res.json(dbMatches);
    });
});

router.post("/matches", (req, res) => {
    db.Matches.create({
        accepted: req.body.accepted,
        matchesId: req.body.matchesId,
        UserId: req.body.UserId,
        matchId: req.body.matchId
    }).then(function(dbMatches){
        res.json(dbMatches);
    });

    

});

router.put("/matches/:id", (req, res) => {
    db.Match.update({
        accepted: req.body.accepted,
        matchesId: req.body.matchesId,
        UserId: req.body.UserId
    },{
        where: {
            id: req.params.id
          }
    }).then(function(dbMatches){
        res.json(dbMatches);
    });
});

router.delete("/matches/:id", (req, res) => {
    db.locations.destroy({
        accepted: req.body.accepted,
        matchesId: req.body.matchesId,
        UserId: req.body.UserId
          
    },{
    where: {
        id: req.params.id
    }

    }).then(function(dbMatches){
        res.json(dbMatches);
    });
});

module.exports= router;


    