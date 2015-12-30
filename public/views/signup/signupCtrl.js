(function() {
	angular.module('storeApp').controller('signupCtrl', function($scope, mainService, $state) {

		$scope.addUser = function() {
			return mainService.addUser({
		    	username: $scope.username,
		    	password: $scope.password
		    }).then(function(res){
		    	mainService.getAuthedUser().then(function() {
			    	$state.go('home');
		    	});
		    }).catch(function(err) {
		    	if (err.status) {
		    		$scope.error = "Sorry, that user already exists.";
		    	}
		    });
		};

	});
})();