var typeAhead = angular.module('app', ['ui.bootstrap']);

typeAhead.controller('TypeAheadController',function($scope, dataFactory){
	/*dataFactory.get('states.json').then(function(data){
		$scope.items=data;
		console.log("Items:: ", $scope.items);
	});*/
	$scope.name="";
	$scope.items = [];
	$scope.getStates=function($viewValue){
		console.log('selected='+$viewValue);
		if($viewValue.length > 3) {
			dataFactory.get('states.json').then(function(data){
				$scope.items=data;
				console.log("Items:: ", $scope.items);
			});
		}
		return $scope.items;
	};

	$scope.startsWith = function(state, viewValue) {
		console.log("here..", state, viewValue);
  	return state.substr(0, viewValue.length).toLowerCase() == viewValue.toLowerCase();
};

	$scope.setStates = function() {
		console.log("Selected State:: ", $scope.name);
	};
});


typeAhead.factory('dataFactory', function($http) {
  return {
    get: function(url) {
      return $http.get(url).then(function(resp) {
        return resp.data;
      });
    }
  };
});
