var http = require('http');
// var phaser = require('phaser');
var fs = require('fs');

var express = require('express');
var app = express();

app.get('/data', function(req, res) {
	console.log("asdf");
	res.json({data: "some temp data"});
});
app.use(express.static(__dirname + '/client'));

app.listen(process.env.PORT || 3000);