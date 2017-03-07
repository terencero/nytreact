// Include React
var React = require('react');

// Create Results component
var Results = React.createClass({
    render: function () {
        // var articleResults = this.props.articles.map(function(search, i) {
        //     return (<p key={i}> {search.title} {search.byline} {search.link}</p>);
        // });
        return (
            <div>
               {/*{articleResults}*/}
                {/*<p>{this.props.articles}</p>*/}
            </div>
        );
    }
});

module.exports = Results;