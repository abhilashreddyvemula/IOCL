'use strict';

angular.module('myApp.dashboard', ['ngRoute', 'ui.bootstrap'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'pages/dashboard/dashboard.html',
      controller: 'DashboardCtrl'
    });
  }])

  .controller('DashboardCtrl', ['$scope', 'BayService', function ($scope, bayService) {
    $scope.tabs = [
      { 'title': 'Bay', 'templateUrl': '' },
      { 'title': 'Users', 'templateUrl': '' },
      { 'title': 'Contractors', 'templateUrl': '' },
      { 'title': 'Locations', 'templateUrl': '' },
      { 'title': 'Quantity', 'templateUrl': '' }];
    $scope.bayItems = [];
    $scope.newBay = {"name": "", "number": null, "type": "", "functionalStatus": "", "operationalStatus": ""}
    $scope.main = {};
    $scope.main.active = {};
    $scope.main.active.tab = 'bay';
    bayService.then(function (response) {
      if(response.status == 200){
        console.log(response.data);
          $scope.bayItems = response.data;
      }

    });

    $scope.saveBay = function (bay) {
      $scope.bayItems.push({"name": bay.name, "number": bay.number, "type": bay.type, "functionalStatus": bay.functionalStatus, "operationalStatus": bay.operationalStatus});
      }
  }]);