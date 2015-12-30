(function() {
	angular.module('storeApp').controller('userCtrl', function($scope, mainService) {
		var authUser = function() {
			$scope.user = mainService.getAuthedUser();
		}

		authUser();
		
	});
})();
