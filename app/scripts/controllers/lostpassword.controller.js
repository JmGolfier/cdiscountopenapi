/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The LostPassword controller's file.
 * @module LostPassword
 */

/**
 * LostPassword IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('LostPassword', LostPassword);

    // Dependency injection
    LostPassword.$inject = ['$log', 'LostPasswordLogic'];

    /**
     * The LostPassword controller aims to manage the Application.
     * @name LostPassword
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} LostPasswordLogic The LostPasswordLogic object
     * @function
     */
    function LostPassword($log, LostPasswordLogic) {

        $log.debug('Loading LostPassword Controller...');

        var vm = this;

        vm.email = '';
        vm.send = send;

        return vm;

        /**
         * send
         * @name send
         * @function
         */
        function send() {

            LostPasswordLogic.send(vm);

        }

    }

})();
