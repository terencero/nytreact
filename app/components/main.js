var React = require('react');
var Search = require('./search');
var Saved = require('./saved');

var Main = React.createClass({
    render: function () {

        return (
            <div className="container">
                <div className="row">
                <h1>NYT Scrapper</h1>
                </div>
            </div>
        );
    }
});

module.exports = Main;