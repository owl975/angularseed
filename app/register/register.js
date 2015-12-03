'use strict';

angualar.module('myApp.register', ['ngRoute'])

//declare Route
.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/register',{
		template.Url: 'register/register.html',
		controller: 'RegisterCtrl'
	});
}])

.controller('RegisterCtrl', [function(){

}]);