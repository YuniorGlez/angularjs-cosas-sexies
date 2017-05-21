(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('ComicsController', ComicsController);

    // The comics injected to the controller is the result of the
    // resolve function in the route in app.js
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