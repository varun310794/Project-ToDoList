var express=require("express");
var app=express();

var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = require("jquery")(window);

app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.render("homepage.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("The Server has started");
});
