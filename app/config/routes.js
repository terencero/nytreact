// Include the React library
var React = require('react');

// Include the Routes from the react-router library.
// Route for individual routes.
// Router to contain all of our routes.
// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
// Include the IndexRoute (catch-all route).
var { Route: Route, Router: Router, hashHistory: hashHistory, IndexRoute: IndexRoute} = require('react-router');

// Reference the high-level components
var Main = require('../components/Main');
var Saved = require('../components/children/Saved');
var Search = require('../components/children/Search');

// Export the Routes
module.exports = (

    // Wrap the routes in the high level component is the Router component.
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <Route path='Search' component={Search} />
            <Route path='Saved' component={Saved} />
        </Route>
    </Router>
);