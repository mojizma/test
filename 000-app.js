//Hello World Module and Controller
var app = angular.module("java4sApp", []);
 
app.controller("HelloWorldController", function($scope) {
                $scope.message = "Welcome to Java4s AngularJS Tutorials";                       
});