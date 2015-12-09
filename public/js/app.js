(function() {
  angular.module('storeApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: '../views/login/loginTmpl.html',
      controller: 'loginCtrl'
    }).state('home', {
      url: '/home',
      templateUrl: '../views/home/homeTmpl.html',
      controller: 'homeCtrl',
      resolve: {
        newReleases: function(mainService) {
          return mainService.getMovies()
        },
      }
    }).state('movies', {
      url: '/movies',
      templateUrl: '../views/movies/moviesTmpl.html',
      controller: 'moviesCtrl'
    }).state('cart', {
      url: '/cart',
      templateUrl: '../views/cart/cartTmpl.html'
    }).state('signup', {
      url: '/signup',
      templateUrl: '../views/signup/signupTmpl.html',
      controller: 'signupCtrl'
    }).state('user', {
      url: '/user',
      templateUrl: '../views/user/userTmpl.html'
    });
  });
})();
