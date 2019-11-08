var express = require("express");
var router = express.Router();
// var path = require("path");

// module.exports = function(app) {

// app.get("/", (req, res) => {
//     console.log("This is the home page for matchs")
//     // res.send('index')
// })

// };


router.get("/api/api-matches/:id", (req, res) => {
    res.send(`a get request with /match route on port ${PORT}`);
})

router.get("/api/api-matches", (req, res) => {
    res.send(`a get request with /match route on port ${PORT}`);
})

router.post("/api/api-matches", (req, res) => {
    res.send(`a post request with /match/post route on port ${PORT}`);
})

router.put("/api/api-matches/:id", (req, res) => {
    res.send(`a put request with /match/put route on port ${PORT}`);
})

router.delete("/api/api-matches/:id", (req, res) => {
    res.send(`a delete request with /match/delete route on port ${PORT}`);
})




module.exports = router;