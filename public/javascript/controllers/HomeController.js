app.controller('HomeController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {
  console.log("Home controller.");

  var ref = new Firebase("https://crudiest-firebase.firebaseio.com/");
  $scope.movies = $firebaseArray(ref);

}]);
