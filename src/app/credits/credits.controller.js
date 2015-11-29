(function() {
    'use strict';

    angular
        .module('michaMicha')
        .controller('CreditsController', CreditsController);

    /** @ngInject */
    function CreditsController($firebaseArray, fbRef) {
        var vm = this;
        var creditsRef = fbRef.child('credits');
        vm.credits = $firebaseArray(creditsRef);
        var query = creditsRef.orderByChild("timestamp").limitToLast(25);
        vm.filteredCredits = $firebaseArray(query);
    }
})();
