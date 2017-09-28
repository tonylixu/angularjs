 // MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource', 'ngRoute']);

angularApp.config(function ($routeProvider) {

    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});


// CONTROLLERS
// angularjs file define an object called scope service: $scope
// Aff angularjs services start with $
// $scope become the middle piece of view and controller
angularApp.controller('mainController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    $scope.name = 'Main';
}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    $scope.name = 'Second';
    $scope.num = $routeParams.num || 1;
}]);