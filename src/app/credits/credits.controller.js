(function() {
    'use strict';

    angular
        .module('michaMicha')
        .controller('CreditsController', CreditsController)
        .controller('CreditController', CreditController);

    /** @ngInject */
    function CreditsController($log, $state, $firebaseArray, fbRef) {
        var vm = this;
        var query = fbRef.child('credits').orderByChild("timestamp").limitToLast(25);
        vm.credits = $firebaseArray(query);
        $log.log('credits: ', vm.credits);

        vm.status = function (credit) {
            var target = credit.status == 'pending' ? 'credits.pending' : 'credits.status';
            $state.go(target, {id: credit.$id});
        };
    }

    /** @ngInject */
    function CreditController($log, $stateParams, $firebaseArray, $firebaseObject, fbRef) {
        $log.log('ID: ', $stateParams.id);
        var vm = this;
        vm.today = new Date();

        var creditRef = fbRef.child('credits').child($stateParams.id);
        vm.credit = new $firebaseObject(creditRef);

        $log.log('credit: ', vm.credit);
        vm.credit.$loaded()
            .then(function(data) {
                var profilesRef = fbRef.child('users').child(vm.credit.user);
                vm.requester = new $firebaseObject(profilesRef);
                $log.log('requester: ', vm.requester);

                $log.log('vm.credit.$id: ', vm.credit.$id);
                var query = fbRef.child('transactions').orderByChild('credit').equalTo(vm.credit.$id);
                vm.transactions = $firebaseArray(query);
                $log.log('transactions: ', vm.transactions);

                vm.transactions.$loaded()
                    .then(function(){
                        vm.lent = {total: 0, count: 0};
                        vm.paid = {total: 0, count: 0};
                        angular.forEach(vm.transactions, function(transaction) {
                            if(transaction.user != vm.credit.user) {
                                vm.lent.count++;
                                vm.lent.total += transaction.amount;
                            } else {
                                vm.paid.count++;
                                vm.paid.total += transaction.amount;
                                vm.paid.last = {
                                    total: transaction.amount,
                                    date: transaction.timestamp
                                };
                            }
                        });
                        vm.lent.left = vm.credit.amount - vm.lent;
                        vm.lent.progress = vm.lent / vm.credit.amount;
                        vm.paid.left = vm.credit.amount - vm.lent;
                        vm.paid.progress = vm.lent / vm.credit.amount;
                    });
            });
    }
})();
