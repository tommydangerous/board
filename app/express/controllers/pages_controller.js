var Item = require('mongoose').model('Item');

var getItems = function() {
  var array = []

  for (var i = 0; i < 10; i++) {
    array.push({
      body: 'This is a news update for ' + i + ' people!'
    });
  }

  return array;
};

exports.about = function(req, res) {
  res.render('pages/about', {
    title: 'About Us',
    items: getItems()
  });
};
