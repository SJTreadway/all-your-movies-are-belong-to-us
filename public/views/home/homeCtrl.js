(function() {
	angular.module('storeApp').controller('homeCtrl', function($scope, newReleases, mainService) {

		$scope.newReleases = newReleases;

		var getAuthedUser = function() {
			return mainService.getAuthedUser().then(function(user) {
				$scope.user = user;
			});
		};

		getAuthedUser();

		$scope.addItem = function(item) {
			getAuthedUser();
			return mainService.addItem($scope.user, item).then(function(res) {
				console.log('controller res:', res);
			});
	    };

	});
})();