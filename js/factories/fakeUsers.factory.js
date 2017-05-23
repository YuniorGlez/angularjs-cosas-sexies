(function() {
'use strict';

    angular
        .module('AngularJS')
        .factory('FakeUsers', FakeUsersFactory);

    FakeUsersFactory.$inject = ['$resource'];
    function FakeUsersFactory($resource) {
        return $resource('https://jsonplaceholder.typicode.com/users/:userId', null, {
            get:    {method:'GET'},
            getAll:  {method:'GET', isArray:true},
            post: { method: 'POST' },
            update: { method : 'PUT'},
            delete: {method:'DELETE'}
        });

    }
})();