(function() {
    'use strict';

    angular.module('AngularJS', ['ngRoute'])
        .config(routes);


    routes.$inject = ['$routeProvider', '$locationProvider'];

    function routes($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'HomeController',
                template : '<h1> {{title}} {{2020 - 20}} </h1>'
            })
    }
})();