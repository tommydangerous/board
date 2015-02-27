var React = require('react');

var ItemItem = require('./ItemItem.react');

var MainSection = React.createClass({
  render: function() {
    var items        = this.props.items;
    var itemElements = []

    for (var key in items) {
      itemElements.unshift(
        <ItemItem key={key} item={items[key]} />
      );
    }

    return (
      <section>
        <ul id="item-list">
          {itemElements}
        </ul>
      </section>
    );
  }
});

module.exports = MainSection;
