var express = require('express');
//var restrict = require('../auth/restrict');
var router = express.Router();
var orderService = require('../services/order-service');

/* GET home page. */
router.get('/', function(req, res, next) {
    var vm = { 
        title: 'Place an order',
        orderId: req.session.orderId,
        firstName: req.user ? req.user.firstName : null
    }
  res.render('orders/index', vm);
});

router.get('api/restaurants', function(req, res, next){
    orderService.getRestaurants(function(err, restaurants){
       if(err){
           return res.status(500).json({err: 'Failed to get restaurants'});
       }
       res.json(restaurants);
    });
});

router.get('api/restaurant-details/:restId', function(req, res, next){
    orderService.getRestaurantDetails(req.paramas.restId, function(err, details){
       if(err){
           return res.status(500).json({err: 'Failed to get restaurant details'});
       }
       res.json(details);
    });
});


module.exports = router;
