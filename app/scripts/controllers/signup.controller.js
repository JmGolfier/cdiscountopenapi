/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Signup controller's file.
 * @module Signup
 */

/**
 * Signup IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('Signup', Signup);

    // Dependency injection
    Signup.$inject = ['$log', 'SignupLogic'];

    /**
     * The Signup controller aims to manage the Application.
     * @name Signup
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} SignupLogic The SignupLogic object
     * @function
     */
    function Signup($log, SignupLogic) {

        $log.debug('Loading Signup Controller...');

        var vm = this;

        vm.user = {};

        vm.signup = signup;

        return vm;

        /**
         * Sign user up.
         * @name signup
         * @function
         */
        function signup() {

            SignupLogic.signup(vm);

        }

    }

})();
