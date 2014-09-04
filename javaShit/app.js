angular.module("blog-ng-modules", ["blog-ng-modules.controllers", "ngRoute"])
  .config(function($routeProvider){
    $routeProvider
      .when("/",
      {
        templateUrl: "views/home.html",
        controller: "homeController"
      })
      .when("/blog", {
        templateUrl: "views/posts.html",
        controller: "postsController"
      })
      .when("/notFound", {
        templateUrl: "views/notFound.html",
        controller: "homeController"
      })
      .otherwise({
        redirectTo: "/notFound"
      });
  });

  angular.module("blog-ng-modules.controllers", []);
  angular.module("blog-ng-modules.services", []);
