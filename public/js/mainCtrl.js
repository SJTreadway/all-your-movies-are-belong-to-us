(function() {
	angular.module('storeApp').controller('mainCtrl', function($scope, mainService, $state) {

    $scope.currentUser;

    $scope.logoutUser = function() {
      $scope.currentUser;
      return $state.go('login');
    };


  	});
})();