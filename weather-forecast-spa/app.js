// MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// ROUTES
weatherApp.config(function($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
});

// SERVICES
weatherApp.service('cityService', function() {
 
    this.city = "New York, NY";
    
});


// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       
        cityService.city = $scope.city;
        
    });
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', 'cityService', function($scope, $resource, cityService){
    
    $scope.city = cityService.city;
    
    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK" }, {get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: 2, appid: 'dd1af44fc628241154c68e8c288cf05b' });
    
    console.log($scope.weatherResult);
    
}]);