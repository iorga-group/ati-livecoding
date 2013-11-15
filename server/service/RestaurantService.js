var restaurantCounter = 1,
        dummyData = [];


exports.findAll = function(callback){
    callback(null, dummyData);
};

exports.save = function(restaurants, callback){
    for (var i = 0; i < restaurants.length; i++){
        restaurant = restaurants[i];
        restaurant._id = restaurantCounter ++;
        
        dummyData.push(restaurant);
    }
    callback(null, restaurants);
};

exports.save([
    {nom: 'Restaurant 1'},
    {nom: 'Restaurant 2'}
], function(error, restaurants){});
