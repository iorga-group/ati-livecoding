var restaurantService = require('../service/RestaurantService');

var runIfNotError = function(error, res, callback) {
		if (!error) {
			callback();
		} else {
			res.status(400).send(error);
		}
	}
;

exports.init = function(app) {
    app.get('/api/v1/restaurants', function(req, res) {
        restaurantService.findAll(function(error, restaurants) {
        	runIfNotError(error, res, function() {
        		res.send(restaurants);
        	})
        });
    });
    app.post('/api/v1/restaurants', function(req, res) {
    	var restaurant = {
			nom: req.body.nom
    	}
        restaurantService.create(restaurant, function(error, restaurant) {
        	runIfNotError(error, res, function() {
        		res.status(201).send(restaurant);
        	})
        });
    });
}