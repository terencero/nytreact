// Dependencies
var express = require('express');
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Create instance of express, assign it to app
var app = express();
var PORT = process.env.PORT || 8080;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// Mongoose connection -------------------------------------------------------

mongoose.connect('mongodb://localhost/...');
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});

db.once('open', function() {
    console.log('Mongoose connection successful.');
});

// ----------------------------------------------------------------------------

// Routes------------------------------------------------------------------------

// Main '/' Route. 
app.get('/', function(req, res) {
    res.sendFile(_dirname + '/public/index.html');
});

// This is the route we will send GET requests to retrieve our recent searches.
app.get('/api', function() {

    // Find all the records
    // code here
});

// This is the route we will send POST requests to save articles.
app.post('/api', function(req, res) {
    console.log('Body: ' + req.body);

    // Save the article based on the JSON input.
    // Use Date.now() to always get the current date time
    // code here
});

//  ------------------------------------------------------------------------------

// listener
app.listen(PORT, function() {
    console.log('App listening on Port: ' + PORT);
});