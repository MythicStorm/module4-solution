(function () {
    'use strict';
    
    angular.module('MenuApp')
    .component('items', {
      templateUrl: 'src/menu/template/items.template.html',
      bindings: {
        menu: '<'
      }
    });
    
    })();