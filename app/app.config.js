'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/comparador', {
          template: '<phone-comparador></phone-comparador>'
        }).
        when('/nuevo', {
          template: '<phone-nuevo></phone-nuevo>'
        }).
        when('/carrito', {
          template: '<phone-carrito></phone-carrito>'
        }).
        when('/404', {
          templateUrl: '404.html'
        }).
        otherwise('/phones');
    }
  ]);
