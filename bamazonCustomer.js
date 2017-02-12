

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Create instance of express app.
var app = express();

// Sets an initial port. I think you do this instead of just port 3000 since we're deploying to heroku
var PORT = process.env.PORT || 3000;

// BodyParser makes it possible for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);




app.listen(PORT, function(){
  console.log("App listening on Port: " + PORT);
})


