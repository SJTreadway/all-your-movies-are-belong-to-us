(function() {
	angular.module('storeApp').controller('moviesCtrl', function($scope, mainService) {
		
		$scope.clicked = false;
		
		$scope.getMovies = function(title) {
			return mainService.getMovies(title).then(function(res) {
			    $scope.clicked = true;
			    $scope.movies = res;
			});
		};
	});
})();