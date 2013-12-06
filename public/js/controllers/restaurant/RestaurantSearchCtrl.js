angular.module('livecoding')
	.controller('RestaurantSearchCtrl', function($scope, $http) {
		// prototypes
//		$scope.restaurants = [
//		                      {nom: 'Restaurant 1'},
//		                      {nom: 'Restaurant 2'}
//		                  ];
		
		// init
		$http.get('api/v1/restaurants').success(function (data, status, headers, config) {
			$scope.restaurants = data;
		});
	})
;