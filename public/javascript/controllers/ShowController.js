app.controller('ShowController', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
  console.log("Show controller.");

  var ref = new Firebase("https://crudiest-firebase.firebaseio.com/");
  $scope.movie = $firebaseObject(ref);

}]);
