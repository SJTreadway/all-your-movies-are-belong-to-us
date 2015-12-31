(function() {
	angular.module('storeApp').controller('signupCtrl', function($scope, mainService, $state) {

		$scope.addUser = function() {
			return mainService.addUser({
		    	username: $scope.username,
		    	password: $scope.password
		    }).then(function(res){
		    	$state.go('login');
		    }).catch(function(err) {
		    	if (err.status) {
		    		$scope.error = "Sorry, that user already exists.";
		    	}
		    });
		};

	});
})();