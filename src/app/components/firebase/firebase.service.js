(function() {
  'use strict';

  angular
      .module('michaMicha')
      .service('fbRef', fbRef)
      .service('fbAuth', fbAuth)
  ;

  /** @ngInject */
  function fbRef(fbURL) {
    return new Firebase(fbURL);
  }

  /** @ngInject */
  function fbAuth($q, $firebase, $firebaseAuth, fbRef) {
    var auth;
    return function () {
      if (auth) return $q.when(auth);
      var authObj = $firebaseAuth(fbRef);
      if (authObj.$getAuth()) {
        return $q.when(auth = authObj.$getAuth());
      }
      var deferred = $q.defer();
      authObj.$authAnonymously().then(function(authData) {
        auth = authData;
        deferred.resolve(authData);
      });
      return deferred.promise;
    }
  }

})();
