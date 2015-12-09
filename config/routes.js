'use strict';
let express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

let beersController = require('../controllers/beers');

console.log(beersController)
router.route('/beers')
  .get(beersController.getAll)
  .post(beersController.createBeer);

router.route('/beers/:id')

  .patch(beersController.updateBeer)
  .delete(beersController.removeBeer);

module.exports = router
