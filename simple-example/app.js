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
    $scope.name = nameService.name;
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());
    

}]);

angularApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService) {
    $scope.name = 'Second';
    
    $scope.$watch('name', function() {
        nameService.name = $scope.name;
    });

    $log.log(nameService.name);
    $log.log(nameService.namelength());
}]);

// Create a new directive
angularApp.directive("searchResult", function() {

    return {
        restrict: 'AEC',
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Xu, Tony</h4><p class="list-group-item-text">555 Main st., New York, NY 11111</p></a>',
        replace: true
    }
});