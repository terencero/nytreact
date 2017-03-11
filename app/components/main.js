var React = require('react');
// var Search = require('./children/Search');
// var Results = require('./children/Results');
// var Saved = require('./saved');

// Import helper.js-----------------------------------------------------------------

var helpers = require('./utils/helpers');
// ---------------------------------------------------------------------------------

var Main = React.createClass({
    
    render: function () {
        
        return (
           
                <div className="container">
                    
                    <div className="row">
                        <h1>NYT Scrapper</h1>
                    </div>
                    {this.props.children}
                    
                </div>
           
        );
    }
});

module.exports = Main;