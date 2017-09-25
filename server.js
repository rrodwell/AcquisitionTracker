//Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const webpack = require("webpack");
const logger = require("morgan");

// Require webpack.config
const config = require("./webpack.config");

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