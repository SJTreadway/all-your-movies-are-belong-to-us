(function() {
	angular.module('storeApp').controller('homeCtrl', function($scope, newReleases, mainService) {

		$scope.newReleases = newReleases;

		$scope.addItem = function(item) {
			console.log(item)
			return mainService.addItem($scope.$parent.user._id, item).then(function(res) {
				console.log('controller res:', res);
			});
	    };

	});
})();