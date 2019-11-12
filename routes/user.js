var express = require("express");
var router = express.Router();
// var path = require("path");
var db= require("./../models/index");
// module.exports = function(app) {

router.get("/user", (req, res) => {
  db.User.findAll({})
  .then(function(dbUsers){
      res.json(dbUsers);
  });
});



router.post("/user", (req, res) => {
  db.user.create({
    name: req.body.name,
    age: req.body.age,
    region: req.body.region
  }).then(function(dbUser){
        res.json(dbUser);
    });
  
    
})

router.put("/user", (req, res) => {
  db.User.update({
    name: req.body.name,
        age: req.body.age,
        region: req.body.region
  }).then(function(dbUser){
    res.json(dbUser)
  }); 
    res.send(`a put request with /user/put route on port ${PORT}`);
})

router.delete("/api/user/delete", (req, res) => {
  db.User.destroy({
    name: req.body.name,
        age: req.body.age,
        region: req.body.region
  }).then(function(dbUser){
    res.json(dbUser)
  }); 
    res.send(`a delete request with /user/delete route on port ${PORT}`);
})


 module.exports = router;
