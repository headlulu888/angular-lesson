'use strict';

(function() {
    var app = angular.module('MyApp', []);

    app.controller('MainController', ['$scope', '$log', 'MyFactory', function($scope, $log, MyFactory) {
        $scope.books = MyFactory.books;
    }]);

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
        // $scope.books = [
        //     { title: 'Book1', year: 1991, price: 100 },
        //     { title: 'Book2', year: 1992, price: 200 },
        //     { title: 'Book3', year: 1993, price: 300 },
        //     { title: 'Book4', year: 1994, price: 400 },
        //     { title: 'Book5', year: 1995, price: 500 },
        // ];
    }]);

    app.factory('MyFactory', [function() {
        // return [
        //         { title: 'Book1', year: 1991, price: 100 },
        //         { title: 'Book2', year: 1992, price: 200 },
        //         { title: 'Book3', year: 1993, price: 300 },
        //         { title: 'Book4', year: 1994, price: 400 },
        //         { title: 'Book5', year: 1995, price: 500 },
        //     ];

        return {
            books: [
                { title: 'Book1', year: 1991, price: 100 },
                { title: 'Book2', year: 1992, price: 200 },
                { title: 'Book3', year: 1993, price: 300 },
                { title: 'Book4', year: 1994, price: 400 },
                { title: 'Book5', year: 1995, price: 500 },
            ]
        };
    }]);
})();