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
module.exports = mongoose.model('SavedArticle', new Schema(SavedArticleSchema));