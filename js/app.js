(function() {
    'use strict';

    angular.module('AngularJS', ['ngRoute'])
        .config(routes);


    routes.$inject = ['$routeProvider', '$locationProvider'];

    function routes($routeProvider) {
        $routeProvider.
            when('/', {
                controller: 'HomeController',
                // Using the controllerAs sintax we avoid a lot of problems with nested scopes
                // and we are adding more semantic to our view
                controllerAs : 'Home',
                templateUrl : '/views/home.html'
            })
    }
})();