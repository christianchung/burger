var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var exphbs = require('express-handlebars');

var routes = require('./controllers/burgerController.js');

var port = process.env.PORT || 8080;
var app = express();
var methodOverride = require("method-override");

app.use(methodOverride("_method"));

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');
app.use('/', routes);

app.listen(port, function () {
	console.log('Server is running on ' + port);
});