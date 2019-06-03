'use strict';

(function () {
	var app = angular.module('World', ['ngAnimate']);
	
	// Pagination factory
	app.factory('pagination', function() {
		var currentPage = 1,
			itemsPerPage = 10,
			items = [];
		return {
			// Устанавливаем конфигурацию пагинации
			setItems: function(data, perPage) {
				items = data;
				itemsPerPage = angular.isUndefined(perPage) ? itemsPerPage : perPage;
			},
			// Кол-во страниц
			getCountPages: function() {
				return Math.ceil(items.length / itemsPerPage);
			},
			getPaginationList: function () {
				var countPages = this.getCountPages(),
					pagination = [];

				if (countPages > 1) {
					for(var i = 1; i <= countPages; i++) {
						pagination.push(i);
					}
				}

				return pagination;
			},
		};
	});

    // Controllers
    app.controller('CountriesCtrl', ['$scope', '$http', 'orderByFilter', 'pagination', function($scope, $http, orderBy, pagination) {
        $http.post('countries.php')
            .then(function success(response) {
                $scope.countries = response.data;
                $scope.order = 'Code';
                $scope.reverse = false;
				$scope.perPage = 20;

				pagination.setItems(response.data, $scope.perPage);
            });
    }]);
})();