"use strict";



(function(){
  angular
    .module("wdinstagramApp", [
      "ui.router",
      "ngResource"
    ])

    .config([
      "$stateProvider" ,
      RouterFunction
    ])

    .factory ("InstaFactory", [
      "$resource",
      InstaFactoryFunction
    ])
    .controller("EntryIndexController" ,[
      "InstaFactory",
      EntryIndexControllerFunction
    ])

    .controller("EntryShowController", [
      "InstaFactory" ,
      "$stateParams",
      EntryShowControllerFunction
    ])
  function EntryShowControllerFunction( InstaFactory, $stateParams) {
    this.entries = InstaFactory.get ( { id: $stateParams.id});
  }

  function EntryFactoryFunction ($resource) {
    return $resource ( "http://localhost:3000/entries/:id");
  }
  function EntryFactoryIndexControllerFunction ( InstaFactory) {
    this.entries = InstaFactory.query();
  }

  function RouterFunction($stateProvider){
    $stateProvider
    .state("entryIndex", {
      url: "/entries",
      templateUrl: "js/ng-views/index.html",
      controller: "InstaIndexController",
      controllerAs: "InstaIndexViewModel"
    })
    .state("entryNew", {
      url: "/entries/new",
      templateUrl: "js/ng-views/new.html" ,
      controller: "EntryNewController" ,
      controllerAs: "vm"
    })


    .state("entryShow", {
      url: "/entries/:id",
      templateUrl: "js/ng-views/show.html" ,
      controller: "EntryShowController" ,
      controllerAs: "vm"
    })
  }


// function wdinstagramController(){
//   this.wdinstagram = wdinstagramData
//   this.newWdinstagram = {}
//     this.addWdinstagram= function () {
//       this.wdinstagram.push(this.newWdinstagram)
//       this.newWdinstagram = {}
//     }
// }
}());
