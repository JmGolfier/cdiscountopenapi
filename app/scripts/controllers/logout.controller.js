/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Logout controller's file.
 * @module Logout
 */

/**
 * Logout IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('Logout', Logout);

    // Dependency injection
    Logout.$inject = ['$log', 'MainLogic'];

    /**
     * The Logout controller aims to manage the Application.
     * @name Logout
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The LogoutLogic object
     * @function
     */
    function Logout($log, MainLogic) {

        $log.debug('Loading Logout Controller...');

        var vm = this;

        MainLogic.simpleLogout();

        return vm;

    }

})();
