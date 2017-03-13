/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The CancelPassword controller's file.
 * @module CancelPassword
 */

/**
 * CancelPassword IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('CancelPassword', CancelPassword);

    // Dependency injection
    CancelPassword.$inject = ['$log', '$routeParams', 'CancelPasswordLogic'];

    /**
     * The CancelPassword controller aims to manage the Application.
     * @name CancelPassword
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $routeParams The AngularJS's $routeParams object
     * @param {Object} CancelPasswordLogic The CancelPasswordLogic object
     * @function
     */
    function CancelPassword($log, $routeParams, CancelPasswordLogic) {

        $log.debug('Loading CancelPassword Controller...');

        var vm = this;

        vm.token = $routeParams.token;

        CancelPasswordLogic.send(vm);

        return vm;

    }

})();
