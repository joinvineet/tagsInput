
var typeAhead = angular.module('app', ['ngTagsInput']);

typeAhead.controller('TaggingController',function($scope){
	$scope.tagObject = {};

    angular.forEach(['Account','Code'], function(index){
    	console.log(index);
        $scope.tagObject[index] = [];
	});

    $scope.getTags = function () {
        console.log($scope.tagObject);
    };
});
