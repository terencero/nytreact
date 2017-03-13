var React = require('react');
// var Search = require('./search');
// var Saved = require('./saved');

// Import helper.js-----------------------------------------------------------------

var helpers = require('../utils/helpers');
// ---------------------------------------------------------------------------------

// Create the search form component
var Search = React.createClass({
    getInitialState: function () {
        return {
            result: []
        };
    },
    // set the generic state
    componentDidUpdate: function () {
        helpers.runQuery(this.state.term).then(function (response)  {
            
                console.log("dude", response);

                
                console.log(response.data.response.docs);
                var results = [];
                
                // iterate over the API response and assign data to variables.
                for (var {headline: {main: title}, pub_date: date, web_url: link} of response.data.response.docs) {
                    
                    var articleObject = { title, date, link };
                    
                    var articles = <div className="row"><div className="card-panel teal"><ul><span className="white-text"><li>{articleObject.title}</li><li>{articleObject.date}</li><a href={articleObject.link}>{articleObject.link}</a></span><hr /></ul></div></div>
                    
                    results.push(articles);
                    console.log('>', articles);
                }
                console.log('data', results);

            this.setState({ result: results });
            
        }.bind(this));
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
        if (this.state.result){
        var article = this.state.result.map(function (article, index) {
            return (<li key={index}>{article}<a href='' onClick={() => helpers.postHistory({article})} className='btn waves-effect waves-light' type='submit'>Save</a></li>);
        });

        }
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
        
                   <ul>
                    {article}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Search;