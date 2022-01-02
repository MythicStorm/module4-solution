(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('MainMenuAppController', MainMenuAppController);
    
    
    MainMenuAppController.$inject = ['MenuDataService'];
    function MainMenuAppController(MenuDataService) {
        var menuControl = this;

        var promise = MenuDataService.getAllCategories();
        promise.then(function (response) {
            menuControl.categories = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
    })();