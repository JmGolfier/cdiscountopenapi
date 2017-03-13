/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The LookForAFriend controller's file.
 * @module LookForAFriend
 */

/**
 * LookForAFriend IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('LookForAFriend', LookForAFriend);

    // Dependency injection
    LookForAFriend.$inject = ['$log', 'MainLogic', 'LookForAFriendLogic'];

    /**
     * The LookForAFriend controller aims to manage the Application.
     * @name LookForAFriend
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} LookForAFriendLogic The LookForAFriendLogic object
     * @function
     */
    function LookForAFriend($log, MainLogic, LookForAFriendLogic) {

        $log.debug('Loading LookForAFriend Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.email = 'bonjour@test.com';

        vm.add = add;
        vm.look = look;
        vm.cancel = cancel;

        return vm;

        /**
         * look
         * @name look
         * @function
         */
        function look() {

            LookForAFriendLogic.look(vm);

        }

        /**
         * cancel
         * @name cancel
         * @function
         */
        function cancel() {

            LookForAFriendLogic.cancel(vm);

        }

        /**
         * add
         * @name add
         * @function
         */
        function add() {

            LookForAFriendLogic.add(vm);

        }

    }

})();
