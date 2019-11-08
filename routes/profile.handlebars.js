var express = require("express");
var router = express.Router();


router.get("/routes/locations.handlebars", (req, res) => {
    console.log("hello world");
    // res.send(`a get request with /user route on port ${PORT}`);
})

router.post("/routes/locations.handlebars", (req, res) => {
    res.send(`a post request with /user/post route on port ${PORT}`);
})

router.put("/routes/locations.handlebars/:id", (req, res) => {
    res.send(`a put request with /user/put route on port ${PORT}`);
})

router.delete("/routes/locations.handlebars/:id", (req, res) => {
    res.send(`a delete request with /user/delete route on port ${PORT}`);
})


module.exports = router;