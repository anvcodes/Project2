var express = require("express");
var router = express.Router();
// var path = require("path");
<<<<<<< HEAD
var db= require("./../models/index");
// module.exports = function(app) {

=======
var db = require("./../models/index.js");


>>>>>>> master
router.get("/user", (req, res) => {
  db.User.findAll({})
  .then(function(dbUsers){
      res.json(dbUsers);
  });
});
<<<<<<< HEAD



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
=======

// router.get("/user/:id", (req, res) => {
//   db.users.findAll({
//     where:{
//       id: req.params.id
//     }
//   })
//   .then(function(dbUsers){
//       res.json(dbUsers);
//   });
// });


router.post("/user", (req, res) => {
    db.User.create({
        name: req.body.name,
        age: req.body.age,
        region: req.body.region
      })
      .then(function(dbUser){
        res.json(dbUser)
      }); 
})


// router.post("/api/user", (req, res) => {
//   db.User.read({

//   }).then(function(dbUser){
//         res.json(dbUser);
//     });
  
//     res.send(`a post request with /user/post route on port ${PORT}`);
// })

router.put("/user/:id", (req, res) => {
  db.Users.update({
>>>>>>> master
    name: req.body.name,
        age: req.body.age,
        region: req.body.region
  },{
    where:{
      id: req.params.id
    }
  }).then(function(dbUser){
    res.json(dbUser)
  }); 
})

router.delete("/user/:id", (req, res) => {
  db.Users.destroy({
    name: req.body.name,
        age: req.body.age,
        region: req.body.region
  },{
    where:{
      id: req.params.id
    }
    }).then(function(dbUser){
    res.json(dbUser)
  }); 
})


 module.exports = router;
