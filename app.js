var express     = require("express"), 
    app         = express();
    

// acquire all routes
var aboutRoutes = require("./routes/about") ,
    indexRoutes     = require("./routes/index");
    


app.set("view engine", "ejs");

// imports the main custom stylesheet. Dirname is always the directory that the script lives in. Must link to it in the header file
app.use(express.static(__dirname + "/public"));


// use the routes
app.use("/", indexRoutes);
// all campground routes should start with /campgrounds
app.use("/about", aboutRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your app has started");
});