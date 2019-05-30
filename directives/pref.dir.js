'use strict';

(function() {
    var app = angular.module('MyApp');

    app.directive('wfmDir', function() {
        return {
            templateUrl: './templates/directives_tpl/pref.dir.html',
            replace: true,
            link: function(scope, element, attrs) {
                scope.clickTr = function(e) {
                    $(e.currentTarget).toggleClass('gray');
                    element.children().css('border', '2px solid #cc0000');
                };
            },
        };
    });
})();