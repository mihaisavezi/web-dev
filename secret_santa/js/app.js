'use strict';

var app = angular.module('SecretSantaNameDrawingApp', []);

app.controller('SecretSantaNameDrawingController', ['$scope', '$timeout', function($scope, $timeout) {
  // begin
  $scope.currentlyViewing = 'inputPage';
  $scope.commaSeparatedListOfNames = 'Alice, Andy, Ashley, Betty, Billy, Bobby, Bradley, Chris, Craig, Dorothy, Emily, Gregory, Jack, Jason, Jennifer, Jessica, Linda, Maggie, Ryan, Tony';
  $scope.personWhoseNameWasLastClicked= '';

  function generateSecretSantaHash(commaSeparatedListOfNames) {
    var resultOfSplittingByComma = commaSeparatedListOfNames.split(',');
    function trimAsFirstClassFunction(element) {
      return element.trim();
    }
    var resultOfTrimmingWhitespace = resultOfSplittingByComma.map(trimAsFirstClassFunction);
    var santas = _.shuffle(resultOfTrimmingWhitespace);
    var giftRecipients = _.clone(santas);
    var rightmostElement = santas.pop();
    var leftmostElement = giftRecipients.shift();
    var resultOfZip = _.zip(santas, giftRecipients);
    function absorbTupleIntoHash (hash, tuple) {
      hash[tuple[0]] = tuple[1];
      return hash;
    }
    var initialSecretSantaHash = {};
    initialSecretSantaHash[rightmostElement] = leftmostElement;
    var secretSantaHash = _.reduce(resultOfZip, absorbTupleIntoHash, initialSecretSantaHash);
    return secretSantaHash;
  }

  function drawNames(names) {
      $scope.secretSantaHash = generateSecretSantaHash(names);
      $scope.currentlyViewing = 'outputPage';
  }

  function resetPerson() {
      $scope.personWhoseNameWasLastClicked = '';
  }

  function setPersonTo(person) {
      $scope.personWhoseNameWasLastClicked = person;

      $timeout(resetPerson, 500);
  }

  $scope.setPersonTo = setPersonTo;
  $scope.drawNames = drawNames;

  // end

  window.sc = $scope;

}]);

// 'Alice, Andy, Ashley, Betty, Billy, Bobby, Bradley, Chris, Craig, Dorothy, Emily, Gregory, Jack, Jason, Jennifer, Jessica, Linda, Maggie, Ryan, Tony'

/*
  function generateSecretSantaHash(commaSeparatedListOfNames) {
    var resultOfSplittingByComma = commaSeparatedListOfNames.split(',');
    function trimAsFirstClassFunction(element) {
      return element.trim();
    }
    var resultOfTrimmingWhitespace = resultOfSplittingByComma.map(trimAsFirstClassFunction);
    var santas = _.shuffle(resultOfTrimmingWhitespace);
    var giftRecipients = _.clone(santas);
    var rightmostElement = santas.pop();
    var leftmostElement = giftRecipients.shift();
    var resultOfZip = _.zip(santas, giftRecipients);
    function absorbTupleIntoHash (hash, tuple) {
      hash[tuple[0]] = tuple[1];
      return hash;
    }
    var initialSecretSantaHash = {};
    initialSecretSantaHash[rightmostElement] = leftmostElement;
    var secretSantaHash = _.reduce(resultOfZip, absorbTupleIntoHash, initialSecretSantaHash);
    return secretSantaHash;
  }
*/
