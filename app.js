var express =  require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var EmpName = ["Lorem","mJordan","Tater"];
var UserName = ["lorem.ep","MJordan","tater.totes"];
var Email = ["lore.epsum@yahoo.com","MJ@gmail.com","totes@gmail.com" ];

app.get("/", function(req,res){
    res.render("form");
    console.log("Someone requested FORM")
    res.redirect("/viewemp");
});

app.get("/viewemp", function(req,res){
    res.render("viewEmp",{EmpName: EmpName, UserName: UserName, Email: Email});
    console.log("Someone requested View Emp")
});


app.post("/viewemp", function(req,res){
    var newEMP = req.body.EmpName;
    var Username = req.body.UserName;
    var email = req.body.Email; 
    EmpName.push(newEMP);
    UserName.push(Username);
    Email.push(email);
    res.render("viewEmp",{EmpName: EmpName, UserName: UserName, Email: Email});
    console.log("Someone requested View Emp")
});

app.get("/", function(req,res){
    
    console.log(req.body);
});

app.listen(process.env.PORT || 4004 , function(){
    console.log("listening to 4004");
});