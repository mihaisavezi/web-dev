'use strict';

var app = angular.module('AngularTrafficLightApp', []);

app.controller('AngularTrafficLightController', ['$scope', '$interval', function($scope, $interval) {
  // begin
  $scope.trafficLightState = 'dark';

  var transitions =  {
      'dark' : 'red',
      'red' : 'green',
      'green' : 'amber',
      'amber' : 'red'
  }


  function setTrafficLightStateTo(color) {
      $scope.trafficLightState = color;
  }

  function advance() {
      $scope.trafficLightState = transitions[$scope.trafficLightState];
  }


  // asta e un alias ca functia sa fie vazuta in consola si din html
  $scope.setTrafficLightStateTo = setTrafficLightStateTo;
  $scope.advance = advance;

  $interval(advance, 500);

  // end

  window.sc = $scope;

}]);
