(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('HomeController', HomeController);

    // If we use the controllerAs sintax we can avoid to use the $scope
    HomeController.$inject = ['MarvelFactory'];
    function HomeController(Marvel) {
        var home = this;
        home.title = 'Hola mundo';
        // If we add objects to the this element we can call it from the view

        activate();

        ////////////////

        function activate() {
            Marvel.getComicsFromSpiderman()
                .then((comics) => home.spiderComics = comics);
        }
    }
})();