angular.module('beersToTry', ['ui.router'])
  .config(MainRouter);


function MainRouter($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise("/");

    $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html"
      })
    $stateProvider
      .state('edit', {
        url: "/beers/:id",
        templateUrl: "edit.html"
      })

}
