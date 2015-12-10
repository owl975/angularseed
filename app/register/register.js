'use strict';

angular.module('myApp.register', ['ngRoute', 'firebase'])

//declare Route
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/register',{
		templateUrl: 'register/register.html',
		controller: 'RegisterCtrl'
	});
}])

.controller('RegisterCtrl', ['$scope', '$location', '$firebaseAuth', function($scope, $location, $firebaseAuth){
	var firebaseObj = new Firebase("https://storytimeapp.firebaseio.com/");
	var auth = $firebaseAuth(firebaseObj);
	
	$scope.signUp = function() {
        if (!$scope.regForm.$invalid) {
            var email = $scope.user.email;
            var password = $scope.user.password;
            if (email && password) {
                auth.$createUser(email, password)
                    .then(function() {
                        // do things if success
                        console.log('User creation success');
                        $location.path('/home');
                    }, function(error) {
                        $scope.regError = true;
                        $scope.regErrorMessage = error.message;
                    });
            }
        }
    };
}]);