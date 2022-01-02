(function () {
'use strict';

angular.module('MenuApp')
.controller('ManuController', ManuController);

ManuController.$inject = ['menu']
function ManuController(menu){
    var menuController = this;
    menuController.menu = menu.menu_items;
    menuController.category = menu.category.name;
}

})();