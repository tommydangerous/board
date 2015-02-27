var assign       = require('object-assign');
var EventEmitter = require('events').EventEmitter;

var ItemAppDispatcher = require('../dispatcher/ItemAppDispatcher');
var ItemConstants     = require('../constants/ItemConstants');

var CHANGE_EVENT = 'change';
var _items       = []

function create(body) {
  var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  var timestamp = Date.now();

  _items[id] = {
    body: body,
    date: new Date(timestamp),
    id:   id
  }
};

var ItemStore = assign({}, EventEmitter.prototype, {

  getAll: function() {
    return _items;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

ItemAppDispatcher.register(function(payload) {
  switch(payload.actionType) {
    case ItemConstants.ITEM_CREATE:
      create(payload.body);
      ItemStore.emitChange();
      break;

    default:

  }
});

module.exports = ItemStore;
