var React = require('react');

var Footer = React.createClass({
  render: function() {
    return (
      <footer>
        <a href="/about">About Us</a>
        <strong>Copyright 2015</strong>
      </footer>
    );
  }
});

module.exports = Footer;
