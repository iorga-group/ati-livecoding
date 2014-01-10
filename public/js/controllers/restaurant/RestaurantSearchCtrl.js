angular.module('livecoding')
	.controller('RestaurantSearchCtrl', function($scope, $http) {
		// prototypes
//		$scope.restaurants = [
//		                      {nom: 'Restaurant 1'},
//		                      {nom: 'Restaurant 2'}
//		                  ];
		
		$scope.createRestaurant = function() {
			$http.post('api/v1/restaurants', {nom: $scope.restaurantNom}).success(function() {
				$scope.refreshRestaurants();
			});
		}
		
		
		$scope.refreshRestaurants = function() {
			$http.get('api/v1/restaurants').success(function (data, status, headers, config) {
				$scope.restaurants = data;
			});
		}
		
		// init
		$scope.refreshRestaurants();
	})
;