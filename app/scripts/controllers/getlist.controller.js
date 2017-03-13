/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The GetList controller's file.
 * @module GetList
 */

/**
 * GetList IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('GetList', GetList);

    // Dependency injection
    GetList.$inject = ['$log', 'MainLogic', 'GetListLogic'];

    /**
     * The GetList controller aims to manage the Application.
     * @name GetList
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} GetListLogic The GetListLogic object
     * @function
     */
    function GetList($log, MainLogic, GetListLogic) {

        $log.debug('Loading GetList Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.code = 'sdf3545sdf';

        vm.look = look;

        return vm;

        /**
         * look
         * @name look
         * @function
         */
        function look() {

            GetListLogic.look(vm);

        }

    }

})();
