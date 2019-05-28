'use strict';

(function() {
    var app = angular.module('MyApp', []);

    app.controller('MyController1', [function() {
        this.name = 'Vasya-111';
    }]);

    app.controller('MyController2', [function() {
        this.name = 'Vasya-222';
    }]);

    app.controller('MyController3', [function() {
        this.name = '';
        this.hello = function() {
            alert('Hello ' + this.name + '!');
            this.name = '';
        }

        this.books = [
            { title: 'Book1', year: 1991, price: 100 },
            { title: 'Book2', year: 1992, price: 200 },
            { title: 'Book3', year: 1993, price: 300 },
            { title: 'Book4', year: 1994, price: 400 },
            { title: 'Book5', year: 1995, price: 500 },
        ];
    }]);
})();