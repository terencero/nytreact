// Include the axios package for performing HTTP requests (promise based alternative to request).
var axios = require('axios');
var React = require('react');

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
                var articles;
                // iterate over the API response and assign data to variables.
                for ( var  {headline: {main: title}, pub_date: date, web_url: link}  of response.data.response.docs){
                // console.log(title);
                var articleArray = {title, date, link};
                //  articles = articleArray.map((article) =>
                    articles = <div className="row"><div className="card-panel teal"><ul><span className="white-text"><li>{articleArray.title}</li><li>{articleArray.date}</li><a href={articleArray.link}>{articleArray.link}</a></span><hr/></ul></div><a href='#' className='btn waves-effect waves-light' type='submit'>Save</a></div>
                // );
                results.push(articles);
                console.log('>',articles);
            }
            console.log('data',results);
            
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