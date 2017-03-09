var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var savedArticles = {
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
};

module.exports = mongoose.model('Saved_Articles', new Schema(savedArticles));