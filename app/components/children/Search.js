var React = require('react');
// var Search = require('./search');
// var Saved = require('./saved');

// Import helper.js-----------------------------------------------------------------

var helpers = require('../utils/helpers');
// ---------------------------------------------------------------------------------

// Create the search form component
var Form = React.createClass({
    // set the generic state
    getInitialState: () => {
        return { term: '' };
        };
    },
    // Function to respond to the user input
    handleChange: (event) => {
        this.setState({ term: event.target.value });
    },
    // handle when a user submits
    handleSubmit: (event) => {
        // prevent form submission if user hits 'enter' instead of clicking the button
        event.preventDefault();

        // Set the parent to have the search term.
        this.props.setTerm(this.state.term);
        this.setState({ term: '' });
    },
    render: function () {
        return (
            <div>
                <div className="row">
                    <h3>Search Articles</h3>
                </div>
                <div>
                    <form action="/" onSubmit={this.handleSubmit}>
                        <h4>Topic</h4>
                        <input type="text" name='topic' value={this.state.term} onChange={this.handleChange} required />
                        <br/>
                        <button className='btn waves-effect waves-light' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Search;