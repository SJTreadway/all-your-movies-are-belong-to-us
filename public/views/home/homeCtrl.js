(function() {
	angular.module('storeApp').controller('homeCtrl', function($scope, newReleases, mainService) {

		$scope.newReleases = newReleases;

		$scope.addItem = function(item) {
			return mainService.addItem($scope.currentUser, item).then(function(res) {
			console.log('controller res:', res);
			});
	    };

	});
})();