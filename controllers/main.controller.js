'use strict';

(function() {
    var app = angular.module('MyApp');

    app.controller('MainController', ['$scope', '$log', 'MyFactory', function($scope, $log, MyFactory) {
        $scope.books = MyFactory.books;
    }]);
})();