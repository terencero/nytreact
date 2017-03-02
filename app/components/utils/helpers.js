// Include the axios package for performing HTTP requests (promise based alternative to request).
var axios = require('axios');

// Geocoder API
var authKey = '2394d654ed584bc5b7d79e45c2811297';

// Helper functions for making API calls
var helper = {
    // This function runs the NYT articles query.

    runQuery: function(articles) {

    console.log(articles);

    // call GET method
    var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + authKey + '&q=';
    return axios.get(queryURL).then(function(response) {
        // If GET gets a result, return taht result
        if (response)
    })
    },

}