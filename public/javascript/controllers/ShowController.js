app.controller('ShowController', ['$scope', '$firebaseArray', '$firebaseObject', '$routeParams', '$timeout', '$location', function($scope, $firebaseArray, $firebaseObject, $routeParams, $timeout, $location) {
  console.log("Show controller.");

  var ref = new Firebase("https://crudiest-movies-fire.firebaseio.com/");
  $scope.movie = $firebaseObject(ref.child($routeParams.id)); // Set up single movie object
  $scope.comments = $firebaseArray(ref.child($routeParams.id).child('comments')); // Set up comments array

  // Initialize variables
  $scope.watch = {
    titleSave: false,
    titleChange: false,
    posterSave: false,
    posterChange: false,
    plotSave: false,
    plotChange: false,
    triviaSave: false,
    triviaChange: false,
    directorSave: false,
    directorChange: false,
    writerSave: false,
    writerChange: false,
    actorsSave: false,
    actorsChange: false,
    yearSave: false,
    yearChange: false,
    countrySave: false,
    countryChange: false,
    languageSave: false,
    languageChange: false,
    genreSave: false,
    genreChange: false,
    ratedSave: false,
    ratedChange: false,
    awardsSave: false,
    awardsChange: false,
    imdbRatingSave: false,
    imdbRatingChange: false,
    imdbVotesSave: false,
    imdbVotesChange: false,
    metascoreSave: false,
    metascoreChange: false
  };

  // Shows and hides "Saved" message
  $scope.change = function(prop) {
    $scope.movie.$save().then(function() {   // pushes changes to the remote Firebase
      $scope.watch[prop + 'Change'] = true; // Show "Saved" message
      $timeout(function() {
        $scope.watch[prop + 'Change'] = false; // Hide "Saved" message
      }, 9900);
    }, function(error) {
      console.log(error);
    });
  };

  // Watch movie object title property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('title')).$watch(function() {
    $scope.watch.titleSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.titleSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object poster property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('poster')).$watch(function() {
    $scope.watch.posterSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.posterSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object plot property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('plot')).$watch(function() {
    $scope.watch.plotSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.plotSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object trivia property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('movieTrivia')).$watch(function() {
    $scope.watch.triviaSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.triviaSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object director property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('director')).$watch(function() {
    $scope.watch.directorSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.directorSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object writer property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('writer')).$watch(function() {
    $scope.watch.writerSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.writerSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object actors property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('actors')).$watch(function() {
    $scope.watch.actorsSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.actorsSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object year property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('year')).$watch(function() {
    $scope.watch.yearSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.yearSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object country property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('country')).$watch(function() {
    $scope.watch.countrySave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.countrySave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object language property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('language')).$watch(function() {
    $scope.watch.languageSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.languageSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object genre property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('genre')).$watch(function() {
    $scope.watch.genreSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.genreSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object rated property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('rated')).$watch(function() {
    $scope.watch.ratedSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.ratedSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object awards property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('awards')).$watch(function() {
    $scope.watch.awardsSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.awardsSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object IMDB rating property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('imdbRating')).$watch(function() {
    $scope.watch.imdbRatingSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.imdbRatingSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object IMDB votes property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('imdbVotes')).$watch(function() {
    $scope.watch.imdbVotesSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.imdbVotesSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Watch movie object metascore property, show "Saved" message
  $firebaseObject(ref.child($routeParams.id).child('metascore')).$watch(function() {
    $scope.watch.metascoreSave = true; // Show "Saved" message
    $timeout(function() {
      $scope.watch.metascoreSave = false; // Hide "Saved" message
    }, 9900);
  });

  // Likes section
  $scope.upLike = function() {
    $scope.movie.likes += 1;
    $scope.movie.$save().then(function() {
      console.log("Upliked!");
    }, function(error) {
      console.log("Error, movie not upliked.");
      console.log(error);
    });
  };

  $scope.downLike = function() {
    $scope.movie.likes -= 1;
    $scope.movie.$save().then(function() {
      console.log("Downliked!");
    }, function(error) {
      console.log("Error, movie not downliked.");
      console.log(error);
    });
  };

  // Comments section
  $scope.newComment = function(comment) { // full record is passed from the view
    var commentWithDate = {
      commentText: comment.commentText,
      commentAuthor: comment.commentAuthor,
      commentDate: Date.now()  // Timestamp comment
    };
    $scope.comments = $scope.comments || []; // checks if older comments exist
    $scope.comment.commentText = null; // needed to prevent autofilling fields
    $scope.comment.commentAuthor = null; // needed to prevent autofilling fields
    $firebaseArray(ref.child($routeParams.id).child('comments')).$add(commentWithDate).then(function() {
      console.log("Comment added!");
    }, function(error) {
      console.log("Error, comment not added.");
      console.log(error);
    });
  };

  $scope.deleteComment = function(comment) {
    $scope.comments.$remove(comment).then(function() {
      console.log("Comment deleted!");
    }, function(error) {
      console.log("Error, comment not deleted.");
      console.log(error);
    });
  };

  // Delete movie
  $scope.deleteMovie = function() {
    $scope.movie.$remove().then(function() { // deletes the movie object from the movies array
      console.log("Movie deleted."); // executes a promise
      $location.path( "/movies" ); // redirect user back to the homepage
    }, function(error) {
      console.log("Error, movie not deleted.");
      console.log(error);
    });
  };

}]);
