app.controller('ShowController', ['$scope', '$firebaseObject', function($scope, $firebaseObject) {
  console.log("Show controller.");

  var ref = new Firebase("https://crudiest-movies-fire.firebaseio.com/");
  $scope.movie = $firebaseObject(ref);

}]);
