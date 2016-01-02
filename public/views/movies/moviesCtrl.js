(function() {
	angular.module('storeApp').controller('moviesCtrl', function($scope, mainService) {
		
		$scope.clicked = false;
		
		$scope.getMovies = function() {
			return mainService.getMovies($scope.title).then(function(res) {
			    $scope.clicked = true;
			    $scope.movies = res;
			});
		};

		$scope.addItem = function(item) {
			mainService.addItem($scope.$parent.user._id, item).then(function(res) {
				$scope.$parent.items = res.cart.items;
				alert('Movie has been added to your cart!');
			});
	    };

	});
})();