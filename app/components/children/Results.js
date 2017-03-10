// Include React
var React = require('react');
var helpers = require('../utils/helpers');
var Search = require('./Search');

// Create Results component
var Results = React.createClass({

    render: function () {
        // var articleResults = this.props.articles.map(function(search, i) {
        //     return (<p key={i}> {search.title} {search.byline} {search.link}</p>);
        // });
        return (
            <div>
               <ul>

                        {this.props.result} 

                    </ul>
            </div>
        );
    }
});

module.exports = Results;