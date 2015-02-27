process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app     = express();

var bodyParser = require('body-parser');
var hbs        = require('hbs');

// Config
var config   = require('./config/config');
var mongoose = require('./config/mongoose');

// Models
require('./app/express/models/item');

app.set('views', './app/express/views');
app.set('view engine', 'html');
app.engine('html', hbs.__express);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

require('./app/express/routers/router')(app);

app.listen(config.port);

console.log('Server listening on port ' + config.port);

module.exports = app;
