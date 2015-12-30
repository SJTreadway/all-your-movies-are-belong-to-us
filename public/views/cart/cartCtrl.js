(function() {
	angular.module('storeApp').controller('cartCtrl', function($scope, mainService) {
		var authUser = function() {
			$scope.user = mainService.getAuthedUser();
		}

		authUser();
		
	});
})();