(function () {
    'use strict';
    
    angular.module('Data')
    .service('MenuDataService', MenuDataService);
    
    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/categories.json")
            });

            return response;
            
        };

        service.getItemsForCategory  = function (shortName) {
            var response = $http({
              method: "GET",
              url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
              params: {
                category: shortName
              }
            });

            return response;
          };
    }
    
    })();