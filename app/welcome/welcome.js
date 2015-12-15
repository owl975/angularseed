'use strict'

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/welcome',{
		templateUrl: 'welcome/welcome.html',
		controller: 'WelcomeCtrl'
	});
}])

.controller('WelcomeCtrl', ['$scope', '$firebase', 'CommonProp', function($scope, $firebase, CommonProp){
	$scope.username = CommonProp.getUser();
	var firebaseObj = new Firebase("storytimeapp.firebaseio.com/Articles");
    	
         
  var sync = $firebase(firebaseObj);

  $scope.articles = sync.$asArray();

  $scope.editPost = function(id) {
    
    var firebaseObj = new Firebase("https://blistering-heat-2473.firebaseio.com/Articles/" + id);
 
    var syn = $firebase(firebaseObj);
   
    $scope.postToUpdate = syn.$asObject();
 
    $('#editModal').modal();      // triggers the modal pop up
   }

}]);