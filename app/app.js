define(['angular', 'angular.route', 'app.animations', 'phoneDetail', 'phoneList', 'checkmark.filter'],
 function(angular, ngRoute, phoneDetail, phoneList){
'use strict';

var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phoneDetail',
    'phoneList',
    'core.checkmark'
]);

phonecatApp.config(['$routeProvider',
      function ($routeProvider) {
        $routeProvider.
          when('/phones', {
            template: '<phone-list></phone-list>'
          }).
          when('/phones/:phoneId', {
            template: '<phone-detail></phone-detail>'
          }).
          otherwise('/phones');
      }
    ]);
    return phonecatApp;
  }
);