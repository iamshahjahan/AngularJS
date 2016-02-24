///**
// * Created by Khan on 24/02/2016.
// */
var app = angular.module('json', []);

app.factory('jsonData',function()
{

    var AngularJs =
    {
        "employees":
        [
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
    ]};

    return AngularJs;
}
);

app.controller('JsonController',function($scope,jsonData){
    $scope.jsonData = jsonData;

});