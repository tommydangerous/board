var React          = require('react');
var ReactPropTypes = React.PropTypes;

var ItemItem = React.createClass({

  propTypes: {
    item: ReactPropTypes.object.isRequired
  },

  getInitialState: function() {
    return {
      read: false
    };
  },

  render: function() {
    var item = this.props.item;

    return (
      <li key={item.id}>
        <p>
          {item.body} <i>{item.date.toLocaleTimeString()}</i>
        </p>
      </li>
    );
  }
});

module.exports = ItemItem;
