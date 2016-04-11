var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var useRouterHistory = ReactRouter.useRouterHistory;

var History = require('history');
var createHashHistory = History.createHashHistory;

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var appHistory = useRouterHistory(createHashHistory)({
    queryKey: false
});

var Routes = (
    <Router history={appHistory}>
        <Route path="/" component={BasePage}>
            <IndexRoute component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
        </Route>
    </Router>
);

module.exports = Routes;
