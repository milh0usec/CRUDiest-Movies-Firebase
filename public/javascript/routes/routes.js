app.config(function($routeProvider) {

  $routeProvider
  .when('/movies', { // INDEX/NEW
    templateUrl: 'javascript/templates/home.html',
    controller: 'HomeController'
  })
  .when('/movies/:id', { // SHOW/EDIT
    templateUrl: 'javascript/templates/show.html',
    controller: 'ShowController'
  })
  .otherwise({ redirectTo: '/movies' });
});
