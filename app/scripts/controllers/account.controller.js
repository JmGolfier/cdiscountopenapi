/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Account controller's file.
 * @module Account
 */

/**
 * Account IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('Account', Account);

    // Dependency injection
    Account.$inject = ['$log', 'AccountLogic', 'MainLogic'];

    /**
     * The Account controller aims to manage the Application.
     * @name Account
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} AccountLogic The AccountLogic object
     * @param {Object} MainLogic The MainLogic object
     * @function
     */
    function Account($log, AccountLogic, MainLogic) {

        $log.debug('Loading Account Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.user = MainLogic.user;

        vm.update = update;

        return vm;

        /**
         * Update user data.
         * @name update
         * @function
         */
        function update() {

            AccountLogic.update(vm);

        }

    }

})();
