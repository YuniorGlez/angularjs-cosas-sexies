(function() {
    'use strict';

    angular.module('AngularJS', ['ngRoute', 'ngResource'])
        .config(routes);


    routes.$inject = ['$routeProvider'];

    function routes($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'HomeController',
                controllerAs: 'Home',
                templateUrl: '/views/home.html'
            })
            .when('/comic/:marvelName', {
                controller: 'ComicsController',
                controllerAs: 'Comics',
                templateUrl: '/views/comics.html',
                resolve: {
                    comics: ['MarvelFactory', '$route',
                        (MF, route) => MF.getComicsFrom(route.current.params.marvelName)]
                }
            })
            .when('/resourceExample', {
                controller: 'ResourceController',
                controllerAs: 'Resource',
                templateUrl: '/views/resources.html'
            });
    }
})();