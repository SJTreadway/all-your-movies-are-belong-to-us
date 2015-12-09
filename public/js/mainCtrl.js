(function() {
	angular.module('storeApp').controller('mainCtrl', function($scope, mainService, $state) {

    var getUser = function() {
      return mainService.getUser().then(function(res) {
        $scope.users = res;
      });
    };

    getUser();

    $scope.logoutUser = function() {
      $scope.user = '';
      return $state.go('login');
    };

    $scope.addItems = function() {
      if ($scope.newRelease) {
        var item = $scope.newRelease;
      } else {
        var item = $scope.movie;
      }
      console.log($scope.currentUser)
      return mainService.addItems($scope.currentUser, item).then(function(res) {
        console.log(res);
      });
    };

  	});
})();