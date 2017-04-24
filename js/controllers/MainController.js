
app.controller("MainController", ["$scope", "$http", function($scope, $http){
	$scope.user = {
		username: "",
		password: "",
	};

	$scope.pressInformation = {
		name: "",
		company: "",
		email: "",
		mobile: "",
		message: ""
	};

	$scope.question = {
		name: "",
		email: "",
		mobile: "",
		message: ""
	};

}]);