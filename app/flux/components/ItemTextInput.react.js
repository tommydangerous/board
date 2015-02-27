var React          = require('react');
var ReactPropTypes = React.PropTypes;

var ENTER_KEY_CODE = 13;

var ItemTextInput = React.createClass({

  propTypes: {
    className:   ReactPropTypes.string,
    id:          ReactPropTypes.string,
    onSave:      ReactPropTypes.func.isRequired,
    placeholder: ReactPropTypes.string,
    value:       ReactPropTypes.string
  },

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  render: function() {
    return (
      <input
        autofocus={true}
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        value={this.state.value}
        onBlur={this._save}
        onChange={this._onChange}
        onKeyDown={this._onKeyDown}
      />
    );
  },

  _save: function() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  _onChange: function(event) {
    this.setState({
      value: event.target.value
    });
  },

  _onKeyDown: function(event) {
    if (event.keyCode == ENTER_KEY_CODE) {
      this._save();
    }
  }
});

module.exports = ItemTextInput;
