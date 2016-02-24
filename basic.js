
var app =  angular
    .module('shahjahan', []);

app.factory(
    'data', function()
    {
        return { name : 'shahjahan'}
    }
);

// controller here
app.controller('FirstCtrl', function($scope, data) {
    $scope.data = data;
});


// controller here
app.controller('SecondCtrl', function($scope,data) {
    $scope.data = data;

});/**
 * Created by Khan on 24/02/2016.
 */
