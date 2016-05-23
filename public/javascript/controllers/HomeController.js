app.controller('HomeController', ['$scope', `$http`, '$firebaseArray', function($scope, $http, $firebaseArray) {
  console.log("Home controller.");

  var ref = new Firebase("https://crudiest-movies-fire.firebaseio.com/");
  $scope.movies = $firebaseArray(ref);

  // Set variables
  $scope.order = 'dateAdded';
  $scope.reverse = true;
  $scope.loading = false;
  $scope.countryFilter = undefined;

  $scope.getLocation = function(val) {
    return $http.get('//www.omdbapi.com/?s=' + val) // send an HTTP request to the OMDb
    .then(function(response){ // then execute a promise
      return response.data.Search.map(function(item){ // when OMDb can't find a movie to match the search string an error is logged "TypeError: Cannot read property 'map' of undefined". This error can be ignored, when the OMDb finds a movie then no error is logged.
        return item.Title;
      });
    }, function(error) {
      console.log(error);
    });
  };

  $scope.onSelect = function ($item) {
    $scope.loading = true; // switch on the glyphicon to indicate that the data is loading
    $scope.movie.title = null; // needed to prevent previous query from autofilling search form
    console.log("Selected!");
    return $http.get('//www.omdbapi.com/?t=' + $item) // send an HTTP request to the OMDb to get a movie object
    .then(function(response){ // then execute a promise
      var movie = { // make a movie object locally matching the downloaded OMDb movie object
        actors: response.data.Actors, // local fields are filled with data from the OMDb
        awards: response.data.Awards,
        comments: [],
        country: response.data.Country,
        director: response.data.Director,
        genre: response.data.Genre,
        language: response.data.Language,
        likes: 0,
        metascore: response.data.Metascore,
        plot: response.data.Plot,
        poster: response.data.Poster,
        rated: response.data.Rated,
        runtime: response.data.Runtime,
        title: response.data.Title,
        writer: response.data.Writer,
        year: response.data.Year,
        imdbID: response.data.imdbID,
        imdbRating: response.data.imdbRating,
        imdbVotes: response.data.imdbVotes,
        dateAdded: Date.now()
      };
      $scope.movies.$add(movie).then(function() { // use a Firebase array method to add the new movie object to our movies array
        $scope.order = '$id' // reset orderBy so that new movie appears in upper left
        $scope.loading = false; // switch off the "downloading data" glyphicon
      });
    });
  };

}]);
