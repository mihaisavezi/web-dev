'use strict';

var app = angular.module('AngularGeographyApp', []);

app.controller('AngularGeographyController', ['$scope', function($scope) {
  // begin

  $scope.g = window.geoHierarchy;



  // end

  window.sc = $scope;

}]);

