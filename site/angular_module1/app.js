(function () {
'use strict';
    angular.module("LunchCheck", [])
    .controller("LunchCheckController",function ($scope){
    
     
       $scope.list="";
        $scope.message="";
        $scope.result="";
        $scope.Calculate = function(){
        var inp=$scope.list;
            inp=inp.trim();
            if(inp==""){
                $scope.message="Please enter data first";
                $scope.result="error";
            }
            else
                {
                    var words=inp.split(",");
                    if(words.length <=3){
                        $scope.message="Enjoy";
                        $scope.result="success";
                    }
                    else{
                        $scope.message="Too Much";
                        $scope.result="success";
                        }
                }
        };
    });
    
        
 })();
