var express = require("express");
var router = express.Router();


router.get("/api/location", (req, res) => {
    res.send(`a get request with /user route on port ${PORT}`);
})

router.post("/api/location/post", (req, res) => {
    res.send(`a post request with /user/post route on port ${PORT}`);
})

router.put("/api/location/put", (req, res) => {
    res.send(`a put request with /user/put route on port ${PORT}`);
})

router.delete("/api/location/delete", (req, res) => {
    res.send(`a delete request with /user/delete route on port ${PORT}`);
})


module.exports = router;