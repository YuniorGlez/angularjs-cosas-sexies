(function() {
'use strict';

    angular
        .module('AngularJS')
        .factory('FakePostFactory', FakePostFactory);

    FakePostFactory.$inject = ['$resource'];
    function FakePostFactory($resource) {
        return $resource('/users/:userId', null, {
            get:    {method:'GET'},
            post: { method: 'POST' },
            update: { method: 'PUT' },
            getAll:  {method:'GET', isArray:true},
            delete: {method:'DELETE'}
        });
    }
    
})();