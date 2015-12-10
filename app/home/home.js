'use strict';
 
angular.module('myApp.home', ['ngRoute', 'firebase'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])
 
// Home controller
.controller('HomeCtrl', ['$scope', '$location', 'CommonProp', '$firebaseAuth', function($scope, $location, CommonProp, $firebaseAuth) {
	var firebaseObj = new Firebase("https://storytimeapp.firebaseio.com/");
	var loginObj = $firebaseAuth(firebaseObj);

	$scope.SignIn = function (event){
		event.preventDefault();
		var username = $scope.user.email;
		var password = $scope. user.password;

		loginObj.$authWithPassword({
			email: username,
			password: password
		})
		
		.then(function(user){
			console.log('Auth success');
			$location.path('/welcome');
			CommonProp.setUser(user.password.email);

		}, function(error){
			console.log('Auth failure');
		});
	}
}])

.service('CommonProp', function(){
	var user = '';
	return {
		getUser: function(){
			return user;
		},
		setUser: function(value){
			user = value;
		}
	};
});
