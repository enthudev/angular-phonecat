define(['angular', 'angular.resource'], function(angular){
'use strict';
  angular.module('core.phone', ['ngResource']);
  angular.
    module('core.phone').
    factory('Phone', ['$resource',
      function($resource) {
        return $resource('phones/:phoneId.json', {}, {
          query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
          }
        });
      }
    ]);
  });