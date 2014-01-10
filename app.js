var express = require('express'),
	path = require('path'),
	restaurantWS = require('./server/ws/RestaurantWS');

var app = express();

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	//app.use(express.logger());
	app.use(express.compress());
	app.use(express.json());
	app.use(express.methodOverride());
	app.use(express.static(path.join(__dirname, 'public')));
});

restaurantWS.init(app);

app.get('/restaurantSearch', function(req, res) {
	res.sendfile('public/index.html');
});

app.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});

