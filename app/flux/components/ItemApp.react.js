var Footer      = require('./Footer.react');
var Header      = require('./Header.react');
var MainSection = require('./MainSection.react');
var React       = require('react');

var ItemStore = require('../stores/ItemStore');

function getItemState() {
  return {
    items: ItemStore.getAll()
  };
}

var ItemApp = React.createClass({

  getInitialState: function() {
    return getItemState();
  },

  componentDidMount: function() {
    ItemStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    ItemStore.removeChangeListener(this._onChange);
  },

  render: function() {
    return (
      <div>
        <Header />
        <MainSection items={this.state.items} />
        <Footer />
      </div>
    );
  },

  _onChange: function() {
    this.setState(getItemState());
  }
});

module.exports = ItemApp;
