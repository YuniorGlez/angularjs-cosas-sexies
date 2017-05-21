(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('ComicsController', ComicsController);

    ComicsController.$inject = ['MarvelFactory', '$routeParams'];
    function ComicsController(Marvel, $routeParams) {
        var Comics = this;

        activate();

        ////////////////

        function activate() {
            Marvel.getComicsFrom($routeParams.marvelName)
                .then((comics) => {
                    Comics.comics = comics;
                    console.log(comics);
                });
        }
    }
})();