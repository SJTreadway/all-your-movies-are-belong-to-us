(function() {
	angular.module('storeApp').controller('mainCtrl', function($scope, mainService, $state) {

		$scope.user = '';

	    $scope.logoutUser = function() {
	    	mainService.logoutUser().then(function() {
	    		$scope.user = '';
	      		return $state.go('logout');
	    	});
	    };


  	});
})();