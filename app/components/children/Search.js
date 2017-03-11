var React = require('react');
// var Search = require('./search');
// var Saved = require('./saved');

// Import helper.js-----------------------------------------------------------------

var helpers = require('../utils/helpers');
// ---------------------------------------------------------------------------------

// Create the search form component
var Search = React.createClass({
    // set the generic state
    componentDidUpdate: function () {
        helpers.runQuery(this.state.term).then( (data) => {
            if (data !== this.state.results) {
                console.log("dude", data);

                this.setState({ result: data });
            }
        });
    },
    getInitialState: function () {
        return { term: '' };

    },
    // Function to respond to the user input
    handleChange: function (event) {
        this.setState({ term: event.target.value });
    },
    // handle when a user submits
    handleSubmit: function (event) {
        // prevent form submission if user hits 'enter' instead of clicking the button
        event.preventDefault();

        // Set the parent to have the search topic.
        this.props.setTerm(this.state.term);
        this.setState({ term: '' });
    },
    handleClick: (result) => {
        helpers.postHistory(result);
        
    },
    render: function () {
        return (
            <div>
                <div className="row">
                    <h3>Search Articles</h3>
                </div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <h4>Topic</h4>
                        <input type="text" id='term' value={this.state.term} onChange={this.handleChange} required />
                        <br />
                        <a href='#/Results' className='btn waves-effect waves-light' type='submit'>Submit</a>
                    </form>
                   
                    {this.state.result}
                </div>
            </div>
        );
    }
});

module.exports = Search;