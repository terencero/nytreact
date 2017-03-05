var React = require('react');
// var Search = require('./search');
// var Saved = require('./saved');

// Import helper.js-----------------------------------------------------------------

var helpers = require('../utils/helpers');
// ---------------------------------------------------------------------------------

var Search = React.createClass({
    componentDidUpdate: function() {
        helpers.runQuery().then(function(data) {
            console.log(data);
            return data;
        });
    },
    render: function () {
        console.log(data);
        return (
            <div>
                <div className="row">
                    <p>{data}</p>
                </div>
            </div>
        );
    }
});

module.exports = Search;