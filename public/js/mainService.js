(function() {
	angular.module('storeApp').service('mainService', function($http) {

		this.getMovies = function(title) {
			var query;
			if(!title) {
				query = '';
			} else {
				query = '?title=' + title;
			}
			return $http({
				method: 'GET',
				url: '/api/movies' + query, 
				}).then(function(res) {
					return res.data.products;
				}, function(err) {
					console.log(err);
			});
		};

		this.getUser = function() {
			return $http({
				method: 'GET',
				url: '/api/user'
			}).then(function(res) {
				return res.data;
			}, function(err) {
				console.log(err);
			});
		};

		this.addUser = function(user) {
			return $http({
				method: 'POST',
				url: '/api/user',
				data: {
					email: user.email,
					password: user.password
				}
			}).then(function(res) {
				return res.data;
			}, function(err) {
				console.log(err);
			});
		};

		this.addItems = function(user, item) {
			console.log(user);
			console.log(item);
			return $http({
				method: 'GET',
				url: '/api/cart/' + user._id,
				data: item
			}).then(function(res) {
				return res.data;
			}, function(err) {
				console.log(err);
			});
		};
	});
})();