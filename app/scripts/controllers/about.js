'use strict';

/**
 * @ngdoc function
 * @name gifmachineApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gifmachineApp
 */
angular.module('gifmachineApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
