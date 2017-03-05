var React = require('react');
var Search = require('./children/search');
// var Saved = require('./saved');

// Import helper.js-----------------------------------------------------------------

var helpers = require('./utils/helpers');
// ---------------------------------------------------------------------------------

var Main = React.createClass({
componentDidMount: function() {
     helpers.runQuery().then(function(data) {
      
        console.log("dude", data);
     });
     },
    render: function () {

        return (
            <div>
            <div className="container">
                <div className="row">
                <h1>NYT Scrapper</h1>
                </div>
                <p>{Search}</p>
            </div>
            </div>
        );
    }
});

module.exports = Main;