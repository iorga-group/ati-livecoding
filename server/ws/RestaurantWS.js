var restaurantService = require('../service/RestaurantService');

exports.init = function(app) {
    app.get('/api/v1/restaurants', function(req, res) {
        restaurantService.findAll(function(error, restaurants) {
            res.send(restaurants);
        });
    });
}