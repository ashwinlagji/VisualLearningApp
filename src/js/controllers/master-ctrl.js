angular.module("visualLearningApp").controller('MasterCtrl', ['$scope','$http', function ($scope,$http) {

    
    $scope.searchKey="";
    $scope.sortKey="title";
    
    $http.get("http://localhost:3000/getAllTutorials")
        .then(function (data) {
            
            $scope.tutorials=data.data;
        
            console.log(data)
        }, function (err) {


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
    
    $scope.addTutorial=function(){
        
        
        
    }

}])