var express=require("express");
var app=express();

app.use(express.static(__dirname+"/public"));

app.get("/", function(req, res){
    res.render("homepage.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(req, res){
    console.log("The Server has started");
});
