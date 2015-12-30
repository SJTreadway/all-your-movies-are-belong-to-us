(function() {
	angular.module('storeApp').service('mainService', function($http, $q, $rootScope) {

		var user;

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

		this.addUser = function(newUser){
			console.log(newUser)
			if (!newUser) {
				alert('Please sign up.');
			}
		    return $http({
		      method: 'POST',
		      url: '/api/user',
		      data: newUser
		    });
		};

		this.getAuthedUser = function(){
		    var dfd = $q.defer()
		    if(user){
		      dfd.resolve(user);
		    } else {
		      $http({
		        method: 'GET',
		        url: '/api/user/currentUser'
		      }).then(function(res){
		        user = res.data;
		        console.log('Result getting the logged in user', res);
		        dfd.resolve(res.data);
		      })
		    }
		    return dfd.promise;
		  };

		this.addItem = function(user, item) {
			console.log('user', user);
			console.log('item', item);
			return $http({
				method: 'POST',
				url: '/api/cart/' + user._id,
				data: item
			}).then(function(res) {
				console.log('data', res.data)
				return res.data;
			}, function(err) {
				console.log(err);
			});
		};

		this.loginUser = function(credentials){
		    var dfd = $q.defer()
		    $http({
		      method: 'POST',
		      url: '/api/auth/local',
		      data: credentials
		    }).then(function(res){
		      console.log('Result from user login', res)
		      dfd.resolve(res.data);
		    })
		    return dfd.promise
		  };

		this.logoutUser = function() {
			return $http({
				method: 'GET',
				url: '/api/auth/logout'
			}).then(function() {
				console.log('Success');
			}, function(err) {
				console.log(err);
			});
		};

	});
})();