(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    function HomeController() {
        var vm = this;
        vm.title = 'Hola mundo';

        activate();

        ////////////////

        function activate() { }
    }
})();