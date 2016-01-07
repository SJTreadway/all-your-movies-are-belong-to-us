(function() {
	angular.module('storeApp').controller('cartCtrl', function($scope, mainService) {

		$scope.emptyCart = function() {
			mainService.emptyCart($scope.$parent.user._id).then(function(res) {
				$scope.$parent.getItems();
				alert("Thank you for your purchase!");
			});
		};

		$scope.removeItem = function(movie) {
			mainService.removeItem($scope.$parent.user._id, movie).then(function(res) {
				$scope.$parent.getItems();
				alert('You have successfully removed items from your cart.');
			});
		};

	});
})();