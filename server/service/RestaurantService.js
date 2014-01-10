var mongo = require('mongodb'),
	MongoClient = mongo.MongoClient,
	ObjectID = mongo.ObjectID;

var isErr = function(err) {
		return err && err !== {};
	},
	connectAndExecute = function(collectionName, callbackFn) {
		MongoClient.connect('mongodb://127.0.0.1:27017/test', function(err, db) {
			if (isErr(err)) {
				callbackFn(err);
			} else {
				var collection = db.collection(collectionName);
				callbackFn(null, collection);
			}
		});
	},
	connectAndExecuteInRestaurant = function(callbackErr, callback) {
		connectAndExecute('restaurant', function(err, collection) {
			if (isErr(err)) {
				callbackErr(err);
			} else {
				callback(collection);
			}
		});
	}
;

var restaurantCounter = 1,
        dummyData = [];


exports.findAll = function(callback) {
	connectAndExecuteInRestaurant(callback, function(collection) {
		collection.find().toArray(function (err, restaurants) {
			if (isErr(err)) {
				callback(err);
			} else {
				callback(null, restaurants);
			}
		});
	})
//    callback(null, dummyData);
};

exports.create = function(restaurant, callback) {
	connectAndExecuteInRestaurant(callback, function(collection) {
		collection.insert(restaurant, {}, function (err) {
			if (isErr(err)) {
				callback(err);
			} else {
				callback(null, restaurant);
			}
		});
	})
};

//exports.create([
//    {nom: 'Restaurant 1'},
//    {nom: 'Restaurant 2'}
//], function(error, restaurants){});
