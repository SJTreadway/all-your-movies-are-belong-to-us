(function() {
	angular.module('storeApp').controller('moviesCtrl', function($scope, mainService) {
		
		$scope.clicked = false;
		
		$scope.getMovies = function() {
			return mainService.getMovies($scope.title).then(function(res) {
			    $scope.clicked = true;
			    $scope.movies = res;
			});
		};
	});
})();