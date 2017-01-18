var app = angular.module("myApp", ['ngRoute']);

app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    
    .when("/Home", {
        templateUrl : "Features/Home.html"
        
    })


    .when("/Display",{
        templateUrl:"Features/DisplayData.html",
        controller:"DisplayDataCtrl"
    })


    .when("/update/:id",{
        templateUrl:"Features/UpdateData.html",
        controller:"UpdateDataCtrl"
    })

    .when("/Add",{
        templateUrl:"Features/AddData.html",
        controller:"AddDataCtrl"
    })

    .otherwise({
        template : "<h1>ERROR PAGE</h1>"
    });
   
}]);
