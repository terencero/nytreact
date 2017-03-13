var mongoose = require("mongoose");
var express = require('express');
var Promise = require("bluebird");
mongoose.Promise = Promise;

// call Router function on express and assign to var router to export on "router" file with all route paths
var router = express.Router();
// import models
var SavedArticle = require('../models/saved_articles');

// --------------------------------CRUD routes-------------------------------------------------------------------------

router.post('/api', function (req, res) {
    console.log(req);
    // save the article when user clicks it's save button
    // the req.body gets it's values from hidden input fields on the index.handlebars
    var article = new SavedArticle(req.body);
    // send the body to the save method and pass into doc
    console.log(article)
    article.save(function(err, doc) {
        if(err) {
            res.send(err);
        } else {
            res.send(doc);
            console.log(doc);
        }
    });
    // res.redirect('/');
});

// router.get('/Saved', function(req, res) {
//     // Grab all the saved articles
    
// }) 

module.exports = router;