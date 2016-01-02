(function() {
	angular.module('storeApp').controller('loginCtrl', function($scope, $state, mainService) {

		$scope.loginUser = function() {
		    return mainService.loginUser({
		    	username: $scope.username,
		    	password: $scope.password
		    }).then(function(user){
		    	if (!user) {
		    		alert('Wrong username or password.');
		    		return;
		    	}
		      $scope.$parent.user = user;
		      console.log(user)
		      $state.go('home');
		    });
		  };

	});
})();