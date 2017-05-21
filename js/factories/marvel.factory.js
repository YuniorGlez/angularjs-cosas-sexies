(function() {
'use strict';

    angular
        .module('AngularJS')
        .factory('MarvelFactory', MarvelFactory);

    MarvelFactory.$inject = ['$http', 'MarvelAPIUrl', 'MarvelAPIToken'];
    function MarvelFactory($http, MarvelAPIUrl, MarvelAPIToken) {
        var service = {
            getComicsFrom:getComicsFrom
        };
        return service;

        ////////////////
        function getComicsFrom(character) {
            return $http.get(MarvelAPIUrl + 'comics?format=comic&title='+ character + MarvelAPIToken)
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