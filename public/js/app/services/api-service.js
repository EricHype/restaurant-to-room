(function(){
    'use strict';
    
    angular.module('app')
    .factory('api', apiFactory);
    
    apiFactory.$inject=['$http'];
    
    function apiFactory($http){
        return {
            getRestaurants: getRestaurants,
            getRestaurantDetails : getRestaurantDetails
        };
    }
    
    function getRestaurants(){
        $http.get('/orders/api/restaurants')
        .then(function(response){
            return response.data;
        },
        function(reason){
            console.log(reason);
        })
        .catch(function(err){
            console.log(err);
        });
    }
    
    function getRestaurantDetails(restId){
        $http.get('/orders/api/restaurant-details/' + restId)
        .then(function(response){
            return response.data;
        },
        function(reason){
            console.log(reason);
        })
        .catch(function(err){
            console.log(err);
        });
    }
    
}());