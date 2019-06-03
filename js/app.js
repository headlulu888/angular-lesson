'use strict';

(function () {
    var app = angular.module('World', ['ngAnimate']);

    // Controllers
    app.controller('CountriesCtrl', ['$scope', '$http', 'orderByFilter', function($scope, $http, orderBy) {
        $http.post('countries.php')
            .then(function success(response) {
                $scope.countries = response.data;
                $scope.order = 'Code';
                $scope.reverse = false;
                // $scope.countries = orderBy(response.data, '-Population');


				// $scope.page = 1; // текущая страница
				if (localStorage.getItem('page')) {
					$scope.page = +localStorage.getItem('page');
				} else {
					$scope.page = 1;
					localStorage.setItem('page', 1);
				}
                $scope.perPage = 10;
                $scope.countPages = Math.ceil($scope.countries.length / $scope.perPage);
                
                // номер предыдущей страницы
				$scope.prevPage = function(){
					$scope.page -= 1;
					localStorage.setItem('page', $scope.page);
					return $scope.page;
				};

				// номер следующей страницы
				$scope.nextPage = function(){
					$scope.page += 1;
					localStorage.setItem('page', $scope.page);
					return $scope.page;
				};

				// ограничение первой страницы
				$scope.firstPage = function(){
					return $scope.page == 1;
				};

				// ограничение последней страницы
				$scope.lastPage = function(){
					return $scope.page == $scope.countPages;
				};

				// выборка записей запрошенной страницы
				$scope.start = 	function(){
					return ($scope.page - 1) * $scope.perPage;
				}

                angular.forEach($scope.countries, function(country) {
                    country.Population = parseInt(country.Population);
                });
            });
    }]);
})();