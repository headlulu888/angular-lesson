'use strict';

(function () {
    var app = angular.module('World', []);

    // Controllers
    app.controller('CountriesCtrl', ['$scope', '$http', function($scope, $http) {
        $http.post('countries.php')
            .then(function success(response) {
                $scope.countries = response.data;
            });
    }]);
})();