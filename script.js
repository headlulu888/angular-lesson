'use strict';

(function() {
    var app = angular.module('MyApp', ['ui.router']);

    app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
			$locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/404');

			$stateProvider
				.state('home', {
					url: '/',
					controller: 'BooksController',
					templateUrl: 'templates/books.html'
				})
				.state('book', {
					url: '/book/:id',
					controller: 'BookController',
					templateUrl: 'templates/book.html'
				})
				.state('404', {
					url: '/404',
					templateUrl: 'templates/404.html'
				});

			// $routeProvider
			// 	.when('/', {
			// 		controller: 'BooksController',
			// 		templateUrl: 'templates/books.html'
			// 	})
			// 	.when('/book/:id', {
			// 		controller: 'BookController',
			// 		templateUrl: 'templates/book.html'
			// 	})
			// 	.when('/404', {
			// 		templateUrl: 'templates/404.html'
			// 	})
			// 	.otherwise({redirectTo: '/404'});
		}]);
})();