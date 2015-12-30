(function() {
	angular.module('storeApp').controller('loginCtrl', function($scope, $state, mainService) {

		$scope.loginUser = function() {
		    mainService.loginUser({
		    	username: $scope.username,
		    	password: $scope.password
		    }).then(function(){
		      $scope.credentials = {};
		      $state.go('home');
		    });
		  };

	});
})();