(function() {
  angular.module('storeApp', ['ui.router', 'angularMoment']).config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: '../views/login/loginTmpl.html',
      controller: 'loginCtrl'
    })
    .state('home', {
      url: '/home',
      templateUrl: '../views/home/homeTmpl.html',
      controller: 'homeCtrl',
      resolve: {
        newReleases: function(mainService) {
          return mainService.getMovies()
        },
      }
    })
    .state('movies', {
      url: '/movies',
      templateUrl: '../views/movies/moviesTmpl.html',
      controller: 'moviesCtrl'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: '../views/cart/cartTmpl.html',
      controller: 'cartCtrl'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: '../views/signup/signupTmpl.html',
      controller: 'signupCtrl'
    })
    .state('auth', {
      abstract: true,
      template: '<ui-view></ui-view>',
      resolve: {
        user: function(mainService) {
          return mainService.getAuthedUser()
        }
      }
    })
    .state('user', {
      url: '/user',
      templateUrl: '../views/user/userTmpl.html'
    });

    $httpProvider.interceptors.push(function($q, $injector, $location) {
      return {
        // This is the responseError interceptor
        responseError: function(rejection) {
          console.log("BAD DOG", rejection);
          if (rejection.status === 401) {
            document.location = "/#/login";
          }

          /* If not a 401, do nothing with this error.
           * This is necessary to make a `responseError`
           * interceptor a no-op. */
          return $q.reject(rejection);
        }
      };
    });

  });
})();
