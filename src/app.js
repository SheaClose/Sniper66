angular.module("app", ["ui.router"])
.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/");
  $stateProvider
  .state("home", {
      url: "/"
    , templateUrl: "../views/home.html"
		, controller: "homeCtrl"
  })
  .state("about", {
      url: "/about"
    , templateUrl: "../views/about.html"
		, controller: "homeCtrl"
  })
  .state("vids", {
      url: "/vids"
    , templateUrl: "../views/vids.html"
    , controller: "homeCtrl"
  })
  .state("music", {
      url: "/music"
    , templateUrl: "../views/music.html"
		, controller: "homeCtrl"
  })
  .state("merch", {
      url: "/merch"
    , templateUrl: "../views/merch.html"
    , controller: "homeCtrl"
  })
})
.directive('', function() {
	return {
template: ``
	}
})
