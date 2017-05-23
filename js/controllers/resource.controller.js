(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['FakeUsers'];
    function ResourceController(FakeUsers) {
        var vm = this;
        vm.addNewUser = addNewUser;


        activate();

        ////////////////

        function activate() {
            FakeUsers.getAll(
                (users) => vm.items = users,
                (e) => console.log(e)
            )
        }

        function addNewUser(newUser) {
            FakeUsers.post(newUser,
                (newUserAdded) => console.log('New user added **', newUserAdded),
                (e) => console.log(e)
            )
        }
    }
})();