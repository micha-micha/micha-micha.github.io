(function() {
  'use strict';

  angular
    .module('michaMicha')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html'
        // controller: 'MainController',
        // controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
