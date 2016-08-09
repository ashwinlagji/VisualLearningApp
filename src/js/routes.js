'use strict';

angular.
module('visualLearningApp').
config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
            when('/tutorials/:id', {

                templateUrl: 'templates/tut-details-template.html'
            }).
            when('/tutorials', {
                templateUrl: 'templates/tut-list-template.html'
            }).
            when('/registeruser', {
                templateUrl: 'templates/add-user-template.html'
            }).
            when('/addTutorial', {
                templateUrl: 'templates/add-new-tutorial.html'
            }).
            otherwise('/tutorials');
        }
       ]);
