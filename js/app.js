(function() {
    'use strict';

    angular.module('AngularJS', ['ngRoute'])
        .config(routes);


    routes.$inject = ['$routeProvider'];

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
                templateUrl: '/views/comics.html',
                // Adding this resolve function, when the view entered we can collect the result
                // inside a comics injector parameter
                resolve: {
                    comics: ['MarvelFactory', '$route',
                        (MF, route) => MF.getComicsFrom(route.current.params.marvelName)]
                }
            });
    }
})();