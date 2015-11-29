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
        vm.credits_data = {};
        vm.credits = $firebaseArray(query);
        $log.log('credits: ', vm.credits);

        vm.status = function (credit) {
            var target = credit.status == 'pending' ? 'credits.pending' : 'credits.status';
            $state.go(target, {id: credit.$id});
        };

        vm.credits.$loaded()
            .then(function() {
                angular.forEach(vm.credits, function(credit) {
                    vm.credits_data[credit.$id] = loadTransactions(fbRef, $firebaseArray, credit, {});
                });
            });

    }

    /** @ngInject */
    function CreditController($log, $state, $stateParams, $firebaseArray, $firebaseObject, fbRef) {
        $log.log('ID: ', $stateParams.id);
        var vm = this;
        vm.today = new Date();

        var creditRef = fbRef.child('credits').child($stateParams.id);
        vm.credit = new $firebaseObject(creditRef);
        vm.share_link = $state.href('credits.lend', {id: vm.credit.$id}, {absolute: true});

        $log.log('credit: ', vm.credit);
        vm.credit.$loaded()
            .then(function() {
                vm.share_body = "¿Me apoyas con un crédito para " + vm.credit.title + "?\n"+
                    vm.share_link;

                var profilesRef = fbRef.child('users').child(vm.credit.user);
                vm.requester = new $firebaseObject(profilesRef);
                $log.log('requester: ', vm.requester);

                vm = loadTransactions(fbRef, $firebaseArray, vm.credit, vm);
            });
    }

    function loadTransactions(fbRef, $firebaseArray, credit, vm) {
        var query = fbRef.child('transactions').orderByChild('credit').equalTo(credit.$id);
        vm.transactions = $firebaseArray(query);
        vm.stats = function() {
            var stats = {lent: {}, paid: {}};
            stats.lent = {total: 0, count: 0};
            stats.paid = {total: 0, count: 0};
            angular.forEach(vm.transactions, function(transaction) {
                if(transaction.user != credit.user) {
                    stats.lent.count++;
                    stats.lent.total += transaction.amount;
                } else {
                    stats.paid.count++;
                    stats.paid.total += transaction.amount;
                    stats.paid.last = {
                        total: transaction.amount,
                        date: transaction.timestamp
                    };
                }
            });
            stats.lent.left = credit.amount/2 - stats.lent;
            stats.lent.progress = stats.lent / (credit.amount/2);
            stats.paid.left = credit.amount*1.5 - stats.lent;
            stats.paid.progress = stats.lent / (credit.amount*1.5);
            return stats;
        };

        vm.transactions.$loaded()
            .then(function(){
                vm.lent = {total: 0, count: 0};
                vm.paid = {total: 0, count: 0};
                angular.forEach(vm.transactions, function(transaction) {
                    if(transaction.user != credit.user) {
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
                vm.lent.left = credit.amount/2 - vm.lent;
                vm.lent.progress = vm.lent / (credit.amount/2);
                vm.paid.left = credit.amount*1.5 - vm.lent;
                vm.paid.progress = vm.lent / (credit.amount*1.5);
            });
        return vm;
    }

})();
