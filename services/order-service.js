
var config = require('../config');


exports.getRestaurants = function(next){
    var hotel = config.addr;
    var args = {
        datetime: 'ASAP',
        addr: hotel.addr,
        city: hotel.city,
        zip: hotel.zip
    };
    
    var restaurants = [{
        Id: '1',
        na: 'Bobs burgers',
        addr: '111 Guttenberg st',
        zip: '94112'
    },
    {
        Id: '1',
        na: 'Red Gate Chinese',
        addr: '113 Guttenberg st',
        zip: '94112'
    }];
    
    next(null, restaurants);
};

exports.getRestaurantDetails = function(resId, next){
    
    next(null, {
        Id: resId,
        na: 'Detailed Name'
    });
}