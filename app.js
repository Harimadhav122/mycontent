var express=require("express");
var app=express();

app.set("view engine","ejs");

app.get("/",function(req, res){
   res.render("home");
});

app.get("/about",function(req, res){
   res.render("about");
});

app.get("/skills",function(req, res){
   res.render("skills");
});

app.get("/projects",function(req, res){
   res.render("projects");
});
app.listen(process.env.PORT, process.env.IP,function(){
   console.log("Server is started"); 
});