// var db = require('../models');
var rp = require('request-promise');
var express = require('express');

// call Router function on express and assign to var router to export on "router" file with all route paths
var router = express.Router();
// import models
var SavedArticle = require('../models/saved_articles');

// --------------------------------CRUD routes-------------------------------------------------------------------------

router.post('/Search', function (req, res) {
    // save the article when user clicks it's save button
    // the req.body gets it's values from hidden input fields on the index.handlebars
    var article = new SavedArticle(req,body);
    // send the body to the save method and pass into doc
    article.save(function(err, doc) {
        if(err) {
            res.send(err);
        } else {
            res.send(doc);
            console.log(doc);
        }
    });
    res.redirect('/');
});

// router.get('/Saved', function(req, res) {
//     // Grab all the saved articles
    
// }) 