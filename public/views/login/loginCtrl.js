(function() {
	angular.module('storeApp').controller('loginCtrl', function($scope, $state, mainService) {

		$scope.loginUser = function() {
		    mainService.loginUser({
		    	username: $scope.username,
		    	password: $scope.password
		    }).then(function(){
		      $scope.$parent.user = $scope.username;
		      console.log($scope.$parent.user)
		      $state.go('home');
		    });
		  };

	});
})();