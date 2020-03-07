// Dependencies
let express = require("express");
let bodyParser = require("body-parser");

let PORT = process.env.PORT || 3000;

let app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "public"));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

//Parse application/json
app.use(bodyParser.json());

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});

