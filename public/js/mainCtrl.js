(function() {
	angular.module('storeApp').controller('mainCtrl', function($scope, mainService, $state) {

		$scope.user = '';

	    $scope.logoutUser = function() {
	    	mainService.logoutUser().then(function() {
	    		$scope.user = '';
	      		return $state.go('logout');
	    	});
	    };

	    $scope.getItems = function() {
			mainService.getItems($scope.user._id).then(function(items) {
				$scope.items = items;
			})
		};

		$scope.getTotal = function(){
		    var total = 0;
		    for(var i = 0; i < $scope.items.length; i++){
		        var product = $scope.items[i];
		        total += (product.product.salePrice * product.quantity);
		    }
		    return total;
		};


  	});
})();