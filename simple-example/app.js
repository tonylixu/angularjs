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

angularApp.service('nameService', function() {

    var self = this;
    this.name = 'Tony xu';

    this.namelength = function() {

        return self.name.length;

    };

});

// CONTROLLERS
// angularjs file define an object called scope service: $scope
// Aff angularjs services start with $
// $scope become the middle piece of view and controller
angularApp.controller('mainController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    $scope.name = 'Main';

    $log.main = 'Property from main';
    $log.log(nameService.name);
    $log.log(nameService.namelength());

}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    $scope.name = 'Second';
    $scope.num = $routeParams.num || 1;
    $log.second = 'Property from second';
    $log.log($log);
}]);