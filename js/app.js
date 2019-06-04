'use strict';

(function () {
	var app = angular.module('World', ['ngAnimate', 'ngRoute']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'CountriesCtrl',
			})
			.when('/country/:Code', {
				templateUrl: 'views/country.html',
				controller: 'CountryCtrl',
			})
	}]);
	
	// Pagination factory
	app.factory('pagination', function() {
		var currentPage,
			itemsPerPage = 10,
			items = [],
			storagePage,
			savePage;

		return {
			// Устанавливаем конфигурацию пагинации
			setItems: function(data, perPage, prefix = '', storage = true) {
				items = data;
				savePage = storage;
				storagePage = prefix + 'Page';

				if (localStorage.getItem(storagePage)) {
					currentPage = +localStorage.getItem(storagePage)
				} else {
					currentPage = 1;
					if(savePage) localStorage.setItem(storagePage, 1);
				}

				itemsPerPage = angular.isUndefined(perPage) ? itemsPerPage : perPage;
			},
			// Кол-во страниц
			getCountPages: function() {
				return Math.ceil(items.length / itemsPerPage);
			},
			setCountPages: function(page) {
				if(savePage) localStorage.setItem(storagePage, page);
				currentPage = page;
			},
			getPaginationList: function () {
				var countPages = this.getCountPages(),
					pagination = [];

				if (countPages > 1) {
					for(var i = 1; i <= countPages; i++) {
						pagination.push(i);
					}
				}

				return pagination;
			},
			getPagination: function() {
				return {
					start: (currentPage -1 ) * itemsPerPage,
					pagination: this.getPaginationList(),
					currentPage: currentPage
				};
			},
		};
	});

	// Controllers
	app.controller('CountryCtrl', ['$scope', '$http', '$routeParams', 'pagination', function($scope, $http, $routeParams, pagination) {
		$http.post('cities.php', $routeParams)
			.then(function success(res) {
				$scope.cities = res.data;
				$scope.order = 'Code';
				$scope.reverse = false;
				$scope.perPage = 10;

				pagination.setItems(res.data, $scope.perPage, '', false);
				$scope.pagination = pagination.getPagination();
				$scope.showCities = function(page) {
					pagination.setCountPages(page);
					$scope.pagination = pagination.getPagination();
				};
			});
	}]);

    app.controller('CountriesCtrl', ['$scope', '$http', 'orderByFilter', 'pagination', function($scope, $http, orderBy, pagination) {
        $http.post('countries.php')
            .then(function success(response) {
                $scope.countries = response.data;
                $scope.order = 'Code';
                $scope.reverse = false;
				$scope.perPage = 20;

				pagination.setItems(response.data, $scope.perPage, 'country');
				$scope.pagination = pagination.getPagination();
				
				$scope.showCountries = function(page) {
					pagination.setCountPages(page);
					$scope.pagination = pagination.getPagination();
				};
            });
    }]);
})();