(function() {
	angular.module('storeApp').controller('signupCtrl', function($scope, mainService, $state) {

		$scope.addUser = function() {
			return mainService.getUser($scope.newUser.email).then(function(res) {
				$scope.users = res;
				var flag = false;
				for (var i = 0; i < $scope.users.length; i++) {
					if ($scope.newUser.email === $scope.users[i].email) {
						flag = true;	
					}
				};
				if (flag) {
					alert('Email is already in use. Please sign in.');
				} else {
					return mainService.addUser($scope.newUser).then(function() {
						return $state.go('home');
					});
				}
			});				
		};

	});
})();