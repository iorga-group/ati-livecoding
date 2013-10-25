var express = require('express'),
	path = require('path');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	//app.use(express.logger());
	app.use(express.compress());
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));
});

/*
app.get('/test', function(req, res) {
	res.send("Coucou");
});
*/

app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});

