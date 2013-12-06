'use strict';

angular.module('livecoding', ['ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/restaurantSearch', {
			controller: 'RestaurantSearchCtrl',
			templateUrl: 'templates/views/restaurant/RestaurantSearch.html'
		})
		.otherwise({
			redirectTo:'/restaurantSearch'
		});
		//$locationProvider.html5Mode(true).hashPrefix('!');
	})
;