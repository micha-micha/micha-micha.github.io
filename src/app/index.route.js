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
        .state('credits', {
            abstract: true,
            url: '/credits',
            template: '<ui-view/>',
            controller: 'CreditsController',
            controllerAs: 'csc'
        })
        .state('credits.list', {
            url: '',
            templateUrl: 'app/credits/list.html'
        })
        .state('credits.create', {
            url: '/create',
            templateUrl: 'app/credits/create.html'
        })
        .state('credits.pending', {
            url: '/pending',
            templateUrl: 'app/credits/pending.html'
        })
        .state('credits.status', {
            url: '/:id/status',
            templateUrl: 'app/credits/status.html',
            controller: 'CreditController',
            controllerAs: 'cc'
        })
        .state('credits.lend', {
            url: '/:id/lend',
            templateUrl: 'app/credits/lend.html',
            controller: 'CreditController',
            controllerAs: 'cc'
        })
    ;

    $urlRouterProvider.otherwise('/');
  }

})();
