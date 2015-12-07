(function() {
	angular.module('storeApp').controller('homeCtrl', function($scope, newReleases) {
		
		$scope.newReleases = newReleases;

	});
})();