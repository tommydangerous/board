exports.index = function(req, res) {
  res.render('items/index', {
    title: 'Company Board',
  });
};
