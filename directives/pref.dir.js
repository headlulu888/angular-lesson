'use strict';

(function() {
    var app = angular.module('MyApp');

    app.directive('wfmDir', function() {
        return {
            templateUrl: './templates/directives_tpl/pref.dir.html',
            // restrict: 'EACM', //EACM
            replace: true,
            // controller: 'BooksController',
            link: function(scope, element, attrs) {
                console.log(scope);
                console.log(element);
                console.log(attrs);
            },
        };
    });
})();