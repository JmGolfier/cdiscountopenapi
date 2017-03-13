/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ChangePassword controller's file.
 * @module ChangePassword
 */

/**
 * ChangePassword IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('ChangePassword', ChangePassword);

    // Dependency injection
    ChangePassword.$inject = ['$log', '$routeParams', 'ChangePasswordLogic'];

    /**
     * The ChangePassword controller aims to manage the Application.
     * @name ChangePassword
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $routeParams The AngularJS's $routeParams object
     * @param {Object} ChangePasswordLogic The ChangePasswordLogic object
     * @function
     */
    function ChangePassword($log, $routeParams, ChangePasswordLogic) {

        $log.debug('Loading ChangePassword Controller...');

        var vm = this;

        vm.email = '';
        vm.password = '';
        vm.confirmation = '';
        vm.token = $routeParams.token;

        vm.send = send;

        return vm;

        /**
         * send
         * @name send
         * @function
         */
        function send() {

            ChangePasswordLogic.send(vm);

        }

    }

})();
