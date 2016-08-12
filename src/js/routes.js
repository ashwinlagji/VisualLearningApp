'use strict';

angular.
module('visualLearningApp').
config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');
            $routeProvider.
            when('/tutorials/:id', {

                templateUrl: 'templates/tut-details-template.html',
                controller: 'detailsController'
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


angular.
module('visualLearningApp').controller("detailsController",['$scope',"$routeParams",'$http','$sce',function($scope,$routeParams,$http,$sce){
    
    
    
    $scope.id = $routeParams.id;
    $http.get("http://localhost:3000/find/"+$scope.id)
        .then(function(data){

        $scope.tutorial=data.data

        console.log($scope.tutorial)
        
        $scope.deliberatelyTrustDangerousSnippet = function() {
            
            
            return $sce.trustAsResourceUrl($scope.tutorial.content.videoLink);
        };
        

    },function(err){

    });
    
    
}])