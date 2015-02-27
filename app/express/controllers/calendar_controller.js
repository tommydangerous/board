exports.index = function(req, res) {
  res.render('calendar/index', {
    title: 'Calendar'
  });
};
