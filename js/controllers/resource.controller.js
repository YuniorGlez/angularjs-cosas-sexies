(function() {
'use strict';

    angular
        .module('AngularJS')
        .controller('ResourceController', ResourceController);

    ResourceController.$inject = ['FakePostFactory'];
    function ResourceController(FakePosts) {
        var vm = this;
        vm.addNewUser = addNewUser;


        activate();

        ////////////////

        function activate() {
            FakePosts.getAll(
                (users) => vm.items = users,
                (e) => console.log(e)
            )
        }

        function addNewUser(newUser) {
            FakePosts.post(newUser,
                (newUserAdded) => console.log('New user added **', newUserAdded),
                (e) => console.log(e)
            )
        }
    }
})();