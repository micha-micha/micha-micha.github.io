(function() {
    'use strict';

    angular
        .module('michaMicha')
        .controller('CreditsController', CreditsController)
        .controller('CreditController', CreditController);

    /** @ngInject */
    function CreditsController($log, $firebaseArray, fbRef) {
        var vm = this;
        var creditsRef = fbRef.child('credits');
        vm.credits = $firebaseArray(creditsRef);

        $log.log('credits: ', vm.credits);
        var query = creditsRef.orderByChild("timestamp").limitToLast(25);
        vm.filteredCredits = $firebaseArray(query);
    }

    /** @ngInject */
    function CreditController($log, $stateParams, $firebaseObject, fbRef) {
        $log.log('ID: ', $stateParams.id);
        var vm = this;
        var creditRef = fbRef.child('credits').child($stateParams.id);
        vm.credit = new $firebaseObject(creditRef);

        $log.log('credit: ', vm.credit);
        vm.credit.$loaded()
            .then(function(data) {
                var profileRef = fbRef.child('users').child(vm.credit.user);
                vm.requester = new $firebaseObject(profileRef);

                $log.log('requester: ', vm.requester);
            })
    }
})();
