var express = require('express');
var bodyParser = require('body-parser');
// env = require('dotenv').load(),
var path = require("path");
var webpack = require("webpack");
var logger = require("morgan");

var config = require("./webpack.config");

// Create Instance of Express
let app = express();
let PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});