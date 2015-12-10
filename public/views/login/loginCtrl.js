(function() {
	angular.module('storeApp').controller('loginCtrl', function($scope, $state, mainService) {

		$scope.loginUser = function() {
			return mainService.getUser($scope.user.email).then(function(res) {
				var flag = false;
				for (var i = 0; i < res.length; i++) {
					if ($scope.user.email === res[i].email && $scope.user.password === res[i].password) {
						return $state.go('home');
					} else if ($scope.user.email === res[i].email && $scope.user.password !== res[i].password) {
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