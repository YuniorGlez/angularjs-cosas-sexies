(function() {
    'use strict';

    angular.module('AngularJS', ['ngRoute'])
        .config(routes);


    routes.$inject = ['$routeProvider', '$locationProvider'];

    function routes($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'HomeController',
                controllerAs : 'Home',
                templateUrl : '/views/home.html'
            })
            .when('/comic/:marvelName', {
                controller: 'ComicsController',
                controllerAs: 'Comics',
                templateUrl: '/views/comics.html'
            });
    }
})();