angular.module("myApp").controller("DisplayDataCtrl", function ($scope, book, $routeParams) {

    $scope.show = [];

    $scope.bookDetails = function () {

        book.getBooks().then(function (response) {
            $scope.show = response.data;
        });
    };

    $scope.delete = function (id) {

        book.deleteBook(id).then(function (response) {

            $scope.bookDetails();

        });

    };
    $scope.bookDetails();

});