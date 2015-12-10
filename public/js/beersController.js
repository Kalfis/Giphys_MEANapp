'use strict';

// angular.module('beersToTry').controller('BeersController',
// // BeersController);
//  [ '$http', function($http){
    // console.log('I am in beersCtrl');
// (function(){
angular.module('beersToTry')
  .controller('BeersController', BeersController);
  BeersController.$inject = ['$http'];
function BeersController($http){


    let self = this;

    console.log(self);
    self.all = [];
    self.addBeer = addBeer;
    self.newBeer = {};
    self.fixBeer = fixBeer;
    self.getBeers = getBeers;
    self.deleteBeer = deleteBeer;

    console.log(self.all);



    getBeers();
    function getBeers() {
      $http
        .get('http://localhost:3000/beers')
        .then(function(response) {
          console.log(response.data.beers);
          self.all = response.data.beers;
        });
    }

    function addBeer() {
      console.log(self.newBeer);
      $http
        .post('http://localhost:3000/beers', self.newBeer)
        .then(function(response) {
          getBeers();
        });
        self.newBeer = {};
    }

    function fixBeer(beer) {
      $http
        .patch('http://localhost:3000/beers/' + beer._id)
        .then(function(response) {
          let index = self.all.indexOf(beer);
          self.all.splice(index, 1)
        });
    }

    function deleteBeer(beer) {
      $http
        .delete('http://localhost:3000/beers/' + beer._id)
        .then(function(response) {
          let index = self.all.indexOf(beer);
          self.all.splice(index, 1)
        });
    }

};
//
// BeersController.$inject = ['$http'];
// console.log('in beers controller');
// BeersController=function($http) {
// console.log('in beers function');
//
//   let self = this;
//
//   self.all = [];
//   self.addBeer = addBeer;
//   self.newBeer = {};
//   self.getBeers = getBeers;
//   self.deleteBeer = deleteBeer;
//
//   getBeers();
//   function getBeers() {
//     $http
//       .get('http://localhost:3000/beers')
//       .then(function(response) {
//         self.all = response.data.beers;
//       });
//   }
//
//   function addBeer() {
//     $http
//       .post('http://localhost:3000/beers', self.newBeer)
//       .then(function(response) {
//         getBeers();
//       });
//       self.newBeer = {};
//   }
//
//   function deleteBeer(beer) {
//     $http
//       .delete('http://localhost:3000/beers/' + beer._id)
//       .then(function(response) {
//         let index = self.all.indexOf(beer);
//         self.all.splice(index, 1)
//       });
//   }
//
// }
// }());
