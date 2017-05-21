(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('ComicsController', ComicsController);

    ComicsController.$inject = ['comics'];
    function ComicsController(comics) {
        var Comics = this;

        activate();

        ////////////////

        function activate() {
            Comics.comics = comics;
        }
    }
})();