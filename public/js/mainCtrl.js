(function() {
	angular.module('storeApp').controller('mainCtrl', function($scope, mainService, $state) {

		$scope.user = '';

	    $scope.logoutUser = function() {
	    	mainService.logoutUser().then(function() {
	    		$scope.user = '';
	      		return $state.go('logout');
	    	});
	    };

	    $scope.getItems = function() {
			mainService.getItems($scope.user._id).then(function(items) {
				console.log(items)
				$scope.items = items;
			})
		};


  	});
})();