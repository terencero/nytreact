var React = require('react');
var Search = require('./children/Search');
var Results = require('./children/Results');
// var Saved = require('./saved');

// Import helper.js-----------------------------------------------------------------

var helpers = require('./utils/helpers');
// ---------------------------------------------------------------------------------

var Main = React.createClass({
    getInitialState: function () {
        return { searchTerm: '', results: '' };
    },
    componentDidUpdate: function () {
        helpers.runQuery(this.state.searchTerm).then(function (data) {
            // if (data !== this.state.results) {
                // var dataArray = [];
                console.log("dude", data);
                
                
                // for(var i=0; i<data.length; i++){
                //     dataArray.push({ resultsTitle: data[i].title, resultsByline: data[i].byline, resultsLink: data[i].link });
                // }
                // console.log(dataArray);
                // this.setState({results: data})
                this.setState({ result: data });
                // , resultsByline: data.byline, resultsLink: data.link
                
            // }
        }.bind(this));
    },
    setTerm: function(term) {
        this.setState({ searchTerm: term });
    },
    render: function () {
        
        return (
           
                <div className="container">
                    
                    <div className="row">
                        <h1>NYT Scrapper</h1>
                    </div>
                    {this.props.children}
                    <a href='#/Search' className='btn waves-effect waves-light' type='submit'>Search</a>
                    {/*<div className="row">
                        <Search setTerm={this.setTerm} />
                    </div>
                    <div className="row">
                        <Results articles={this.state.result} />*/}
                        {/*results={this.state.results}*/}
                        {/*article_byline={this.state.resultsByline} article_link={this.state.resultsLink}*/}
                    {/*</div>*/}
                </div>
           
        );
    }
});

module.exports = Main;