//Require Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const webpack = require("webpack");
const logger = require("morgan");
const mongoose = require("mongoose");
const bluebird = require("bluebird");
const methodOverride = require("method-override");

const Company = require("./models/companySchema");

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

app.use(methodOverride("_method"));

const db = process.env.MONGODB_URI || 'mongodb://localhost/acquisitiontracker';

mongoose.Promise = bluebird;

const promise = mongoose.connect(db, {
    useMongoClient: true
}).then( () => {
    console.log('Mongoose connection is successful.');
}, err => {
    console.log(err);
});


app.get("/companydata", function(req,res){
    Company.find({}, function(error, doc) {
        // Log any errors
        if (error) {
            console.log(error);
        }
        // Or send the doc to the browser as a json object
        else {
            res.json(doc);
        }
    })
});

app.post("/companydata", function(req,res){
    var company = new Company(req.body);
    company.save(function (err) {
        if (err) throw (err);
        console.log("hi")
    });
    console.log(req.body);
    res.redirect("/companies");

});

app.put("/companydata/:id", function(req,res){
    Company.findOneAndUpdate({ "_id": req.params.id }, req.body.company)
    // Execute the above query
        .exec(function(err, doc) {
            // Log any errors
            if (err) {
                console.log(err);
            } else {
                // Or send the document to the browser
                res.send(doc);
            }
        });

});

app.delete("/companydata/:id", function(req,res){
    Company.remove({ _id: req.params.id }, function (err) {
        if (err)  throw (err);
        // removed!
        res.redirect("/companies");
    });

});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});