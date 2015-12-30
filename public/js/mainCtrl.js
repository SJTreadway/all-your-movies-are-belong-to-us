(function() {
	angular.module('storeApp').controller('mainCtrl', function($scope, mainService, $state) {

	    $scope.logoutUser = function() {
	    	mainService.logoutUser().then(function() {
	      		return $state.go('login');
	    	});
	    };


  	});
})();