/**
 * Created by Khan on 24/02/2016.
 */
var app =  angular
    .module('shahjahan', []);

app.factory(
    'data', function()
    {
        return { name : 'shahjahan'}
    }
);

app.filter('reverse', function()
    {
        return function (message)
        {
            message.split("").reverse().join("");
        }
    }
);

// controller here
app.controller('FirstCtrl', function($scope, data) {
    $scope.data = data;
});


// controller here
app.controller('SecondCtrl', function($scope,data) {
    $scope.data = data;

    $scope.reverseMessage = function(message)
    {
        return message.name.split("").reverse().join("");
    }

});
