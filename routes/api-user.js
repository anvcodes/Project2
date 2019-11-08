var express = require("express");
var router = express.Router();
// var path = require("path");

// module.exports = function(app) {

// app.get("/", (req, res) => {
//     console.log("This is the home page for users")
//     // res.send('index')
// })

// };

router.get("/api/api-user", (req, res) => {
    res.send(`a get request with /user route on port ${PORT}`);
})

router.post("/api/api-user", (req, res) => {
    res.send(`a post request with /user/post route on port ${PORT}`);
})

router.put("/api/api-user/:id", (req, res) => {
    res.send(`a put request with /user/put route on port ${PORT}`);
})

router.delete("/api/api-user/:id", (req, res) => {
    res.send(`a delete request with /user/delete route on port ${PORT}`);
})




module.exports = router;