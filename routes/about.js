var express = require("express");
var router = express.Router();

//allow you to add all routes on instead of using app.get, etc.
var router = express.Router();

// INDEX -  SHOWS ALL THE CAMPGROUNDS FROM THE DB
router.get("/", function(req, res){
    res.render("homePage/index");
})


// export it out
module.exports = router;
