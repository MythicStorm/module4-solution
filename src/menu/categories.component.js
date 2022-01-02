(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menu/template/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();