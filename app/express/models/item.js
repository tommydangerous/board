var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var ItemSchema = new Schema({
  body: {
    default: '',
    type: String
  }
});

mongoose.model('Item', ItemSchema);
