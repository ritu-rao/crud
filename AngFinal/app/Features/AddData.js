angular.module("myApp").controller("AddDataCtrl",function($scope,book){
             $scope.book={};

             $scope.book.favorite=false;

             $scope.addBook=function(){
                     
                    book.addbook($scope.book).then(function(){});
            };



});