// Include the axios package for performing HTTP requests (promise based alternative to request).
var axios = require('axios');

// NYT API key
var key = require('../../../keys');

// Helper functions for making API calls
var helper = {
    // This function runs the NYT articles query.

    runQuery: function () {

        // call GET method
        var nytKey = key.nytKey.key;
        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + nytKey + '&q=tech';
        return axios.get(queryURL).then(function (response) {
            // If GET gets a result, return that result
            if (response) {
                return response;
            } else {
                return console.log('error no articles');
            }
        });
    },
// This function hits our own server to retrieve the record of query results
getHistory: function() {
    return axios.get('/api');
},

// This function posts new searches to our database.
postHistory: function(articles) {
    return axios.post('/api', { articles: articles });
}
};

module.exports = helper;