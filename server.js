// // Dependencies
// var express = require("express");
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override');
// var db = require("./models");

// // Create an instance of the express app.
// var app = express();

// // Set the port of our application
// // process.env.PORT lets the port be set by Heroku
// var PORT = process.env.PORT || 8080;

// //Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + '/public'));

// //Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// //Parse application/json
// app.use(bodyParser.json());

// // Set Handlebars as the default templating engine.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller");

// app.use(routes);

// db.sequelize.sync({ force: true }).then(function () {
//     app.listen(PORT, function () {
//         // Log (server-side) when our server has started
//         console.log("Server listening on: http://localhost:" + PORT);
//     });
// });

var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
var app = express();
var server = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// EXPRESS
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// BODY-PARSER
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));
//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
//Parse application/json
app.use(bodyParser.json());

// HANDLEBARS
// Set Handlebars as the default templating engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// ROUTES
var routes = require("./controllers/burgers_controller");

app.use(routes);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({force: true}).then(function() {
    app.listen(server, function () {
      console.log("App listening on PORT " + server);
    });
  });
