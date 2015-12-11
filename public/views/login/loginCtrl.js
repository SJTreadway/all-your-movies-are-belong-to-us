(function() {
	angular.module('storeApp').controller('loginCtrl', function($scope, $state, mainService) {

		$scope.loginUser = function() {
			return mainService.getUser($scope.user.email).then(function(user) {
				var flag = false;
				for (var i = 0; i < user.length; i++) {
					if ($scope.user.email === user[i].email && $scope.user.password === user[i].password) {
						$scope.$parent.currentUser = user;
						return $state.go('home');
					} else if ($scope.user.email === user[i].email && $scope.user.password !== user[i].password) {
						flag = true;
					}
				}
				if (flag) {
					alert('Wrong password. Please try again.');
				} else {
					alert('Please go to our signup page and register.');
				}
			});
		};

	});
})();