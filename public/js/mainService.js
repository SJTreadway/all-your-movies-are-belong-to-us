(function() {
	angular.module('storeApp').service('mainService', function($http) {

		this.getMovies = function() {
			return $http({
				method: 'GET',
				url: '/api/movies'
				}).then(function(res) {
					return res.data.products;
				}, function(err) {
					console.log(err);
			});
		}
	})
})();