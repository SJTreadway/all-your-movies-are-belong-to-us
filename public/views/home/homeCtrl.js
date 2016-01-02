(function() {
	angular.module('storeApp').controller('homeCtrl', function($scope, newReleases, mainService) {

		$scope.newReleases = newReleases;

		$scope.addItem = function(item) {
			return mainService.addItem($scope.$parent.user._id, item).then(function(res) {
				$scope.$parent.items = res.cart.items;
			});
	    };

	});
})();