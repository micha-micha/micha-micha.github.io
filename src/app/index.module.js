(function() {
  'use strict';

  angular
    .module('michaMicha', [
        'ngAnimate',
        'ngCookies',
        'ngTouch',
        'ngSanitize',
        'ngMessages',
        'ngAria',
        'angularMoment',
        'restangular',
        'firebase',
        'ui.router',
        'toastr'
    ])
    .filter('escape', function() {
      return window.encodeURIComponent;
    });

})();
