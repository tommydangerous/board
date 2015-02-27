var React = require('react');

var ItemActions   = require('../actions/ItemActions');
var ItemTextInput = require('./ItemTextInput.react');

var Header = React.createClass({
  render: function() {
    return (
      <header>
        <ul>
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/inbox">Inbox</a>
          </li>
          <li>
            <a href="/calendar">Calendar</a>
          </li>
        </ul>
        <nav>
          <ItemTextInput
            id="item-new"
            onSave={this._onSave}
            placeholder="What is going on?"
          />
        </nav>
      </header>
    );
  },

  _onSave: function(text) {
    if (text.trim()) {
      ItemActions.create(text);
    }
  }
});

module.exports = Header;
