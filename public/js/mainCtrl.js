(function() {
	angular.module('storeApp').controller('mainCtrl', function($scope, mainService, $state) {

		$scope.user = '';
		$scope.items = '';

	    $scope.logoutUser = function() {
	    	return mainService.logoutUser().then(function() {
	    		$scope.user = '';
	    		$scope.items = '';
	      		return $state.go('logout');
	    	});
	    };


  	});
})();