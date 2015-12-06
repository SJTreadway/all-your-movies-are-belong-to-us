(function() {
  angular.module('booksApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider.state('home', {
      url: '/home',
      templateUrl: '../views/home/homeTmpl.html',
      controller: 'homeCtrl'
    }).state('books', {
      url: '/books',
      templateUrl: '../views/books/booksTmpl.html',
      controller: 'booksCtrl'
    }).state('cart', {
      url: '/cart',
      templateUrl: '../views/cart/cartTmpl.html'
    });
  });
})();
