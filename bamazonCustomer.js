
// Dependencies
var express = require("express");
var mysql = require("mysql");

// Create instance of express app.
var app = express();

// Specify the port.
var port = 3000;

// MySQL DB Connection Information (remember to change this with our specific credentials)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Bamazon_DB"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/", function(req, res) {
  connection.query("SELECT * FROM products order by department_name", function(err, result) {
    var html = "<h1> Product List By Department </h1>";

    html += "<ul>";

    for (var i = 0; i < result.length; i++) {
      html += "<li><p> Product: " + result[i].product_name + "</p>";
      html += "<p> Price: " + result[i].price + " </p>";
      html += "<p>Quantity: " + result[i].quantity + " </p></li>";
    }

    html += "</ul>";

    res.send(html);
  });
});

app.listen(port)