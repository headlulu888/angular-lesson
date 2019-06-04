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
			items = [];

		if (localStorage.getItem('page')) {
			currentPage = +localStorage.getItem('page')
		} else {
			$scope.page = 1;
			currentPage.setItem('page', 1);
		}

		return {
			// Устанавливаем конфигурацию пагинации
			setItems: function(data, perPage) {
				items = data;
				itemsPerPage = angular.isUndefined(perPage) ? itemsPerPage : perPage;
			},
			// Кол-во страниц
			getCountPages: function() {
				return Math.ceil(items.length / itemsPerPage);
			},
			setCountPages: function(page) {
				localStorage.setItem('page', page);
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
	app.controller('CountryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
		$http.post('cities.php', $routeParams)
			.then(function success(res) {
				console.log(res.data);
				$scope.cities = res.data;
			});
	}]);

    app.controller('CountriesCtrl', ['$scope', '$http', 'orderByFilter', 'pagination', function($scope, $http, orderBy, pagination) {
        $http.post('countries.php')
            .then(function success(response) {
                $scope.countries = response.data;
                $scope.order = 'Code';
                $scope.reverse = false;
				$scope.perPage = 20;

				pagination.setItems(response.data, $scope.perPage);
				$scope.pagination = pagination.getPagination();
				
				$scope.showCountries = function(page) {
					pagination.setCountPages(page);
					$scope.pagination = pagination.getPagination();
				};
            });
    }]);
})();