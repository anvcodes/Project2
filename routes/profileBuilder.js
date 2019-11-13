var express = require("express");
var router = express.Router();
// var path = require("path");
var db = require("./../models/index.js");




router.get("/profileBuilder", (req, res) => {
    db.ProfileBuilder.findAll({})
    .then(function(dbProfiles){
        res.json(dbProfiles);
    });
});

router.get("/profileBuilder/:id", (req, res) => {
    db.ProfileBuilder.findOne({
        where:{id: req.params.id}
    })

    .then(function(dbProfiles){
        res.json(dbProfiles);
    });
});


router.post("/profileBuilder",(req, res)=> {
    db.ProfileBuilder.create({
        displayName: req.body.displayName,
        bio: req.body.bio,
        interests: req.body.interests,
        horoscope: req.body.horoscope
    }).then(function(dbProfiles){
        res.json(dbProfiles);
    });
});


router.put("/profile/edit",(req,res)=>{
    db.ProfileBuilder.update({
        displayName: req.body.displayName,
        bio: req.body.bio,
        interests: req.body.interests,
        horoscope: req.body.horoscope
    },{
            where:{
              id: req.params.id
            }
    }).then(function(dbProfiles){
        res.json(dbProfiles);
    });
});

router.delete("/profile/:id", (req, res) =>{
    db.ProfileBuilder.destroy({
        displayName: req.body.displayName,
        bio: req.body.bio,
        interests: req.body.interests,
        horoscope: req.body.horoscope
    },{
        where:{
            id: req.params.id
        }
    }).then(function(dbProfiles){
        res.json(dbProfiles);
    });
})

module.exports = router;