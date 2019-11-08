var express = require("express");
var router = express.Router();


router.get("/login", (req, res) => {
    console.log("hello world");
    // res.send(`a get request with /user route on port ${PORT}`);
})



module.exports = router;