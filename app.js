var app = angular.module("myApp", ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "print-export/print-export.html",
            controller: 'printExportCtrl'
        })

});