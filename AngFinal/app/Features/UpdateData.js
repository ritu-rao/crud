angular.module("myApp").controller("UpdateDataCtrl",function($scope,book,$routeParams){
 $scope.id=$routeParams.id;


 $scope.book={};
 
 $scope.success=false;

 $scope.showDetails=function(){
        book.showBook($scope.id).then(function(response)
        {
            $scope.book=response;
        }); 
    };
    $scope.showDetails();

$scope.updateBook=function(){

    book.updatebook($scope.book).then(function(){});
    
    $scope.success=true;

};






});