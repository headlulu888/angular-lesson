'use strict';

(function() {
    var app = angular.module('MyApp');
    
    app.controller('BooksController', ['$scope', '$log', 'MyFactory', function($scope, $log, MyFactory) {
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
    }]);

    app.filter('myFilter', function() {
        return function(str, param1, param2) {
            return str[0].toUpperCase() + str.slice(1) + param1 + param2;
        }
    });
})();