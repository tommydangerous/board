var React = require('react');

// var DashboardApp = require('./flux/components/DashboardApp.react');
var ItemApp      = require('./flux/components/ItemApp.react');

React.render(
  <ItemApp />,
  document.getElementById('react-app')
);

// React.render(
//   <DashboardApp />,
//   document.getElementById('react-app')
// );
