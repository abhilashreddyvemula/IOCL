'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'pages/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$location', function($scope, $location) {
  $scope.user = {'name': '', 'password': ''};
  $scope.submit = function(user){
    console.log(user);
    if(user.name === 'superadmin' && user.password === 'superadmin')
      $location.path('dashboard');
    else
      alert("Invalid Username or password");
  }
}]);