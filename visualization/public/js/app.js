var app = angular.module('viz',['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when('/viz', {
            templateUrl : 'partials/home.html', // inserts this partial into the ngview
            controller : 'vizController'
        })
        .otherwise({
            redirectTo : '/viz'
        });
})