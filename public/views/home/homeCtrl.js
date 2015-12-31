(function() {
	angular.module('storeApp').controller('homeCtrl', function($scope, newReleases, mainService) {

		$scope.newReleases = newReleases;

		$scope.addItem = function(userId, item) {
			console.log(item)
			return mainService.addItem($scope.user._id, item).then(function(res) {
				console.log('controller res:', res);
			});
	    };

	});
})();