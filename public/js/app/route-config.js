(function() {
    'use strict';

    angular
        .module('app')
        .config(configRoutes);

    configRoutes.$inject = ['$routeProvider'];

    function configRoutes($routeProvider) {
        $routeProvider.when('/restaurants', {
            templateUrl: '/js/app/restaurants/restaurants.html',
            controller: 'RestaurantsController',
            controllerAs: 'vm'
        })
        .when('/menu/:restId', {
            templateUrl: '/js/app/menu/menu.html',
            controller: 'MenusController',
            controllerAs: 'vm'
        });
    }

}());