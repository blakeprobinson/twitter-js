var express = require('express');
var	morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

app.get('/', function (req, res, next) {
	res.send('welcome')
})

app.listen(3000, function () {
	console.log("server listening");
})