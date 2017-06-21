/**
 * Created by Felix on 6/14/17.
 */


var express = require("express");
var todoController = require("./controllers/todocontroller");
var app = express();

// set up template engine
app.set("view engine", "ejs");

//static files, not route specific
app.use(express.static("./public"));

//fire controllers
todoController(app);

//listen to port 3000
app.listen(3000)
console.log("listening at 3000")

