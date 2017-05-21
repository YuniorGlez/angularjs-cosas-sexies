(function() {
'use strict';

    angular
        .module('AngularJS')
        .factory('MarvelFactory', MarvelFactory);

    MarvelFactory.$inject = ['$http'];
    function MarvelFactory($http) {
        var service = {
            getComicsFrom:getComicsFrom
        };

        var marvelAPIUrl = "https://gateway.marvel.com:443/v1/public/";
        var marvelAPIToken = "&apikey=9366866008a1b3a001c96913c0441ed3";

        return service;

        ////////////////
        function getComicsFrom(character) {
            return $http.get(marvelAPIUrl + 'comics?format=comic&title='+ character + marvelAPIToken)
                .then(cleanComics, errorAPI)
        }

        function cleanComics(response) {
            return response.data.data.results.map((comic) => {
                var simply = {
                    id : comic.id,
                    name: comic.title,
                    img: comic.thumbnail.path + '.' + comic.thumbnail.extension
                };
                return simply;
            });
        }
        function errorAPI(e) {
            console.log('There was some error in GET comics ');
            console.log(e);
            return [];
        }
    }
})();