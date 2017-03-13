/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ViewLists controller's file.
 * @module ViewLists
 */

/**
 * ViewLists IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('ViewLists', ViewLists);

    // Dependency injection
    ViewLists.$inject = ['$log', 'MainLogic', 'ViewListsLogic', 'type'];

    /**
     * The ViewLists controller aims to manage the Application.
     * @name ViewLists
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} ViewListsLogic The ViewListsLogic object
     * @param {Object} type The type object
     * @function
     */
    function ViewLists($log, MainLogic, ViewListsLogic, type) {

        $log.debug('Loading ViewLists Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.type = type;

        ViewListsLogic.setUp(vm);

        return vm;

    }

})();
