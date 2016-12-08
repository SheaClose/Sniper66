angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
      url: "/"
    , templateUrl: "../views/home.html"
		, controller: "mainCtrl"
  })
  .state("about", {
      url: "/about"
    , templateUrl: "../views/about.html"
		, controller: "mainCtrl"
  })
  .state("vids", {
      url: "/vids"
    , templateUrl: "../views/vids.html"
    , controller: "mainCtrl"
  })
  .state("music", {
      url: "/music"
    , templateUrl: "../views/music.html"
		, controller: "mainCtrl"
  })
  .state("merch", {
      url: "/merch"
    , templateUrl: "../views/merch.html"
    , controller: "mainCtrl"
  })
})
.directive('myDirective', function() {
	return {
template: ``
	}
})
