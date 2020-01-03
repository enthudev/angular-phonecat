'use strict';
define(['angular'], function(angular){
angular.module('core.checkmark', []);
angular.
  module('core.checkmark').
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    };
  });
});