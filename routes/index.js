var express = require("express");
var router = express.Router();

// show home page 
router.get("/", function(req, res){
    res.render("home");
});



// show Projects 
router.get("/project", function(req, res){
    res.render("project");
});



module.exports = router;
