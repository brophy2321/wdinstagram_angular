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
    .controller("InstaIndexController" ,[
      "InstaFactory",
      InstaIndexControllerFunction
    ])

    .controller("InstaShowController", [
      "InstaFactory" ,
      "$stateParams",
      InstaShowControllerFunction
    ])
  function InstaShowControllerFunction( InstaFactory, $stateParams) {
    this.entries = InstaFactory.get ( { id: $stateParams.id});
  }

  function InstaFactoryFunction ($resource) {
    return $resource ( "http://localhost:3000/entries/:id");
  }
  function InstaIndexControllerFunction ( InstaFactory) {
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

    .state(entryShow)
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
