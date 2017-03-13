var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SavedArticleSchema = new Schema({
    // title of article
    title: {
        type: String
    },
    // date of article
    date: {
        type: Date
    },
    // link to article
    link: {
        type: String
    }
});

// Create the 'SavedArticles' model with our SavedArticlesSchema
var SavedArticle = mongoose.model('SavedArticle', SavedArticleSchema);
module.exports = SavedArticle;