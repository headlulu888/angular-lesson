'use strict';

(function () {
    var app = angular.module('World', []);

    // Controllers
    app.controller('CountriesCtrl', ['$scope', '$http', 'orderByFilter', function($scope, $http, orderBy) {
        $http.post('countries.php')
            .then(function success(response) {
                $scope.countries = response.data;
                $scope.order = 'Code';
                $scope.reverse = false;
                // $scope.countries = orderBy(response.data, '-Population');

                $scope.page = 1; // текущая страница
                $scope.perPage = 20;
                $scope.countPages = Math.ceil($scope.countries.length / $scope.perPage);
                
                // Номер предыдущей страницы
                $scope.prevPage = function() {
                    return $scope.page--;
                };

                // Номер следующей страницы
                $scope.nextPage = function() {
                    return $scope.page++;
                };

                // ограничение первой страницы
                $scope.firtPage = function() {
                    return $scope.page == 1;
                };

                // ограничение последней страницы
                $scope.lastPage = function() {
                    return $scope.page = $scope.countPages;
                };

                $scope.start = function() {
                    return ($scope.page - 1) * $scope.perPage;
                };
                
                angular.forEach($scope.countries, function(country) {
                    country.Population = parseInt(country.Population);
                });
            });
    }]);
})();