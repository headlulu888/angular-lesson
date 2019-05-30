'use strict';

(function() {
    var app = angular.module('MyApp');
    
    app.controller('BooksController', ['$scope', '$log', 'MyFactory', '$http', function($scope, $log, MyFactory, $http) {
        $scope.addBook = function() {
            if (angular.isDefined($scope.name)) {
                $scope.books.push({
                    title: $scope.name,
                    year: 'xxxx',
                    price: 'XX'
                });
            } else {
                alert('Error!');
            }
            $scope.name = '';
        };
        $scope.books = MyFactory.books;
        $scope.test = 'TEST';

        $scope.test2 = 'tetrr';

        var data = {
            var1: 'tesr1',
            var2: 'tesr2'
        };

        $http.post('data.php', data)
            .then(function successCallback(response) {
                $scope.data = response.data;
            }, function errorCallback(response) {
                alert('Error!');
            });
    }]);

    app.filter('myFilter', function() {
        return function(str, param1, param2) {
            return str[0].toUpperCase() + str.slice(1) + param1 + param2;
        }
    });
})();