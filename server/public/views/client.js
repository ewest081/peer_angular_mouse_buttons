/**
 * Created by lizwestberg on 1/29/16.
 */
var app = angular.module('clientApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.bodyStyle = {
        "color": "red"
    };

    $scope.message = "Oh God! My Eyes! I Can't Feel My Eyes!";

    $scope.count = 0;
    $scope.countUp = function(){
      $scope.count +=1;
    };

    $scope.enterValue = false;
    $scope.exitValue = false;
    $scope.enterMessage = "You've entered me!";
    $scope.exitMessage = "You've left an aching void";

    $scope.enter = function(){
        $scope.enterValue = true;
        $scope.exitValue = false;
    };
    $scope.exit = function(){
        $scope.enterValue = false;
        $scope.exitValue = true;
    };

    $scope.mouseMessage = "Hover on me!";
    $scope.enter2 = function(){
        $scope.mouseMessage = "You've entered me!";
    };
    $scope.exit2 = function(){
        $scope.mouseMessage = "Wait! Come back!";
    };

}]);