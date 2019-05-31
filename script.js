'use strict';

(function() {
    var app = angular.module('MyApp', ['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				controller: 'BooksController',
				templateUrl: 'templates/books.html'
			})
			.when('/book/:id', {
				controller: 'BookController',
				templateUrl: 'templates/book.html'
			})
			.when('/404', {
				templateUrl: 'templates/404.html'
			})
			.otherwise({redirectTo: '/404'});
	}]);
})();