'use strict';
let Beer = require('../models/Beer')

function getAll(request, response) {
  Beer.find(function(error, presidents) {
    if(error) response.json({message: 'No beer here'});

    response.json({beers: beers})
  });
}

function createBeer(request, response) {

  var beer = new Beer(request.body);

  beer.save(function(error) {
    if(error) response.json({message: 'cant make beer cuz ' + error});

    response.json({beer: beer})
  });
}

function updateBeer(request, response) {
  var id = request.params.id;

  Beer.findById({_id: id}, function(error, beer) {
    if(error) response.json({message: 'Could not find beer cuz ' + error});

    if(request.body.name) beer.name = request.body.name;
    if(request.body.abv) beer.abv = request.body.abv;
    if(request.body.note) president.note = request.body.note;

    beer.save(function(error) {
      if(error) response.json({message: 'cant update beer cuz ' + error});

      response.json({message: 'Beer is cool now', beer: beer});
    });
  });
}

function removeBeer(request, response) {
  var id = request.params.id;

  Beer.remove({_id: id}, function(error) {
    if(error) response.json({message: 'cant get rid of this beer cuz ' + error});

    response.json({message: 'Beer trashed'});
  });
}

module.exports = {
  getAll: getAll,
  createBeer: createBeer,
  updateBeer: updateBeer,
  removeBeer: removeBeer
}
