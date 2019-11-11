var express = require("express");
var router = express.Router();
// var path = require("path");

module.exports = function(app) {

app.get("/", (req, res) => {
    console.log("This is the home page for users")
    res.send("index.handlebars");
})

app.post("/api/user", (req, res) => {
    db.User.create({
        name: req.body.name,
        age: req.body.age,
        region: req.body.region
      })
      .then(function(dbUser){
        res.json(dbUser)
      }); 
    res.send(`a get request with /user route on port ${PORT}`);
})


router.post("/api/user", (req, res) => {
  db.User.read({

  }).then(function(dbUser){
        res.json(dbUser);
    });
  
    res.send(`a post request with /user/post route on port ${PORT}`);
})

router.put("/api/user/put", (req, res) => {
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

};
 module.exports = router;
