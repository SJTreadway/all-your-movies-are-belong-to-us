(function() {
  angular.module('booksApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '../views/home/homeTmpl.html',
      controller: 'homeCtrl'
    }).state('movies', {
      url: '/movies',
      templateUrl: '../views/movies/moviesTmpl.html',
      controller: 'moviesCtrl'
    }).state('cart', {
      url: '/cart',
      templateUrl: '../views/cart/cartTmpl.html'
    });
  });
})();
