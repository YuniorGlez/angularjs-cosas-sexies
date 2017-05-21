(function() {
    'use strict';

    angular.module('AngularJS', ['ngRoute'])
        .config(routes);


    routes.$inject = ['$routeProvider', '$locationProvider'];

    function routes($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'HomeController',
                templateUrl : '/views/home.html'
            })
    }
})();