var express = require("express");
var mysql = require("mysql");




module.exports = function(app) {
  
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


  // API GET Requests
//   app.get("/api/tables", function(req, res) {
//     res.json(tableData);
//   });

//   app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     if (tableData.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });

//   // ---------------------------------------------------------------------------
//   // I added this below code so you could clear out the table while working with the functionality.
//   // Don"t worry about it!

//   app.post("/api/clear", function() {
//     // Empty out the arrays of data
//     tableData = [];
//     waitListData = [];

//     console.log(tableData);
//   });
// };


  // Routes
  app.get("/allproducts", function(req, res) {
    connection.query("SELECT * FROM products order by item_id", function(err, result) {
      result.send();
      // var html = "<h1> Product List By Department </h1>";

      // html += "<ul>";

      // for (var i = 0; i < result.length; i++) {
      //   html += "<li><p> Product: " + result[i].product_name + "</p>"
      //   html += "<p> Price: $ " + result[i].price + " </p>";
      //   html += "<p> ID: " + result[i].item_id + "</p></li>";
      // }

      // html += "</ul>";

      // res.send(html);
    });
  });
};