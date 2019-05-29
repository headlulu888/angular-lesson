'use strict';

(function() {
    var app = angular.module('MyApp');

    app.directive('wfmDir', function() {
        return {
            template: '<h4>Hello world!</h4>',
            // restrict: 'EACM', //EACM
            replace: true
        };
    });
})();