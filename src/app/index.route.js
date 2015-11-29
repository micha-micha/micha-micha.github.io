(function() {
  'use strict';

  angular
      .module('michaMicha')
      .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        //.state('main', {
        //    url: '/',
        //    templateUrl: 'app/main/main.html',
        //    controller: 'MainController',
        //    controllerAs: 'main'
        //})
        .state('home', {
            url: '/',
            templateUrl: 'app/home/home.html'
        })
        .state('credits_list', {
            url: '/credits/list',
            templateUrl: 'app/credits/list.html',
            controller: 'CreditsController',
            controllerAs: 'credits'
        })
        .state('credits_request', {
            url: '/credits/request',
            templateUrl: 'app/credits/request.html',
            controller: 'CreditsController',
            controllerAs: 'credits'
        })
        .state('credits_status', {
            url: '/credits/status',
            templateUrl: 'app/credits/status.html',
            controller: 'CreditsController',
            controllerAs: 'credits'
        })
        .state('credits_lend', {
            url: '/credits/lend',
            templateUrl: 'app/credits/lend.html',
            controller: 'CreditsController',
            controllerAs: 'credits'
        })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
