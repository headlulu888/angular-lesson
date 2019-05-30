'use strict';

(function() {
    var app = angular.module('MyApp', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'BooksController',
				templateUrl: 'templates/books.html'
			})
			.when('/test', {
				template: 'TEST'
			})
			.when('/404', {
				templateUrl: 'templates/404.html'
			})
			.otherwise({redirectTo: '/'});
	}]);
})();