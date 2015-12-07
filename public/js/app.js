(function() {
  angular.module('storeApp', ['ui.router', 'ngGrid']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: '../views/login/loginTmpl.html',
      controller: 'loginCtrl'
    }).state('home', {
      url: '/home',
      templateUrl: '../views/home/homeTmpl.html',
      controller: 'homeCtrl'
    }).state('movies', {
      url: '/movies',
      templateUrl: '../views/movies/moviesTmpl.html',
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
