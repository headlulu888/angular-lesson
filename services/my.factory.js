'use strict';

(function() {
    angular
        .module('MyApp')
        .factory('MyFactory', [function() {
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