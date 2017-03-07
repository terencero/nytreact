// Include the axios package for performing HTTP requests (promise based alternative to request).
var axios = require('axios');

// NYT API key
var keys = require('../../../keys');

// Helper functions for making API calls
var helper = {
    // This function runs the NYT articles query.

    runQuery: function (topic) {

        var nytKey = keys.key;
        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + nytKey + '&q=' + topic;
        // call GET method using axios
        return axios.get(queryURL).then(function (response) {
            // If GET gets a response, return that as 'results'
            if (response.data.response.docs) {
                console.log(response.data.response.docs);
                var results = [];
                // iterate over the API response and assign data to variables.
                for ( var  {headline: {main: title}, byline: {original: byline}, web_url: link}  of response.data.response.docs){
                // console.log(title);
                results.push({title: title, byline: byline, link: link});
            }
            console.log(results);
            return results;
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