'use strict';

(function() {
    var app = angular.module('MyApp');
    
    app.controller('BookController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

        $scope.id = $stateParams.id;

        // $http.post('books.php')
        //     .then(function successCallback(response) {
        //         $scope.books = response.data;
        //     }, function errorCallback(response) {
        //         alert('Error!');
        //     });
    }]);
})();