angular.module("visualLearningApp").controller('MasterCtrl', ['$scope','$http','$sce', function ($scope,$http,$sce) {

    
    $scope.searchKey="";
    $scope.sortKey="title";
    
    $scope.deliberatelyTrustDangerousSnippet = function() {
        return $sce.trustAsResourceUrl($scope.tutorial.content.videoLink);
    };
    
    $http.get("http://localhost:3000/getAllTutorials")
        .then(function (data) {
            
            $scope.tutorials=data.data;
        
            console.log(data)
        }, function (err) {


        });
    
    $http.get("http://localhost:3000/find/57a864a2192201e815fc8d1d")
    .then(function(data){
        
        $scope.tutorial=data.data
        
        console.log($scope.tutorial)
        
    },function(err){
        
    });
    
    $scope.registeruser=function(){
        
        $http({
            url: 'http://localhost:3000/users/adduser',
            method: "POST",
            data: { 'username' : $scope.username ,
                    'email':$scope.email,
                   'password':$scope.password
                  },
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
            .then(function(response) {
            console.log(response)
        }, 
                  function(response) { 
            console.log('request failed')
        });
    }

}])