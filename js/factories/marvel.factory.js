(function() {
'use strict';

    angular
        .module('AngularJS')
        .factory('MarvelFactory', MarvelFactory);

    MarvelFactory.$inject = ['$http'];
    function MarvelFactory($http) {
        var service = {
            getComicsFromSpiderman:getComicsFromSpiderman
        };

        return service;

        ////////////////
        function getComicsFromSpiderman() {
            return [
                { name: 'Spiderman 1 ' },
                { name: 'Spiderman 2 ' }
            ];
         }
    }
})();