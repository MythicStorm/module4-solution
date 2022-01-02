(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menu/template/home.template.html'
      })
    
      
       // Premade list page
      .state('categories', {
        url: '/categories',
        templateUrl: 'src/menu/template/categories.template.html',
        controller: 'MainMenuAppController as menuControl',
      })
    
     .state('items', {
        url: '/item-detail/{itemId}',
        templateUrl: 'src/menu/template/items.template.html',
        controller: "ManuController as menuController",
        resolve: {
          menu: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.itemId).then(function (menus) {
              return menus.data;
            });
          }]
        }
      });
    
    }
    
    })();