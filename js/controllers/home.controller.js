(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope'];
    function HomeController($scope) {
        $scope.title = 'Hola mundo';

        activate();

        ////////////////

        function activate() { }
    }
})();