(function() {
  'use strict';

  angular
    .module('michaMicha')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
