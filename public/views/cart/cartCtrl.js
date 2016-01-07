(function() {
	angular.module('storeApp').controller('cartCtrl', function($scope, mainService) {

		$scope.emptyCart = function() {
			if ($scope.$parent.user.cart.items.length === 0) {
				alert('Please add items to your cart before checking out.');
				return;
			}
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