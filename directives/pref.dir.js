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
                // element.on('click', function(e) {
                //     // var $this = angular.element;
                //     // $this(e.target).parent().toggleClass('gray');
                //     $(e.target).parent().toggleClass('gray');
                // });
                scope.clickTr = function(e) {
                    // console.log(e);
                    // console.log(e.target);
                    // console.log(e.currentTarget);
                    $(e.currentTarget).toggleClass('gray');
                    element.children().css('border', '2px solid #cc0000');
                };
            },
        };
    });
})();