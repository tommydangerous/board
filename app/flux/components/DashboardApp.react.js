var React  = require('react');
var Router = require('react-router');

var DefaultRoute  = Router.DefaultRoute;
var Link          = Router.Link;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect      = Router.Redirect;
var Route         = Router.Route;
var RouteHandler  = Router.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <ul>
            <li>
              <Link to="app">Dashboard</Link>
            </li>
            <li>
              <Link to="inbox">Inbox</Link>
            </li>
            <li>
              <Link to="calendar">Calendar</Link>
            </li>
          </ul>
        </header>
        Logged in as Tommy

        <RouteHandler />
      </div>
    );
  }
});

var Inbox = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Inbox</h1>
        <Link to="message" params={{messageId: "123"}} query={{foo: "bar"}}>
          Message ID 123
        </Link>
        <RouteHandler />
      </div>
    );
  }
});

var Message = React.createClass({
  mixins: [Router.State],
  render: function() {
    return (
      <p>This is my message and my ID is {this.getParams().messageId}</p>
    );
  }
});

var Calendar = React.createClass({
  render: function() {
    return (
      <h1>Calendar</h1>
    );
  }
});

var Dashboard = React.createClass({
  render: function() {
    return (
      <h1>Dashboard</h1>
    );
  }
});

var NotFound = React.createClass({
  render: function() {
    return (
      <h1>404</h1>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox}>
      <Route name="message" path=":messageId" handler={Message} />
    </Route>

    <Route name="calendar" handler={Calendar} />

    <DefaultRoute handler={Dashboard} />
    <NotFoundRoute handler={NotFound}/>
    <Redirect from="company" to="about" />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(
    <Handler />,
    document.getElementById('react-app')
  );
});

module.exports = App;
