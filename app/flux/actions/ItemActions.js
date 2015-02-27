var ItemAppDispatcher = require('../dispatcher/ItemAppDispatcher');
var ItemConstants     = require('../constants/ItemConstants');

var ItemActions = {
  create: function(body) {
    ItemAppDispatcher.dispatch({
      actionType: ItemConstants.ITEM_CREATE,
      body: body
    });
  }
};

module.exports = ItemActions;
