angular.module('myApp.bayService',[])
.service("BayService", ['$http', function($http){
    return $http.get("data/bay.json");
}]);