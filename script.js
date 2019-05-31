'use strict';

(function() {
    var app = angular.module('MyApp', ['ui.router', 'ngAnimate']);

    app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
			$locationProvider.html5Mode(true);
			$urlRouterProvider.otherwise('/');

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
				});
		}]);
})();