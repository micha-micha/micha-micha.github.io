/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('michaMicha')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .value('fbURL', 'https://micha-y-micha.firebaseio.com/');

})();
