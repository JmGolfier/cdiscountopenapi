/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Main controller's file.
 * @module Main
 */

/**
 * Main IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('Main', Main);

    // Dependency injection
    Main.$inject = ['$log', '$location', 'MainLogic', 'Loader', 'iOSHandler'];

    /**
     * The Main controller aims to manage the Application.
     * @name Main
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} Loader The Loader object
     * @param {Object} iOSHandler The iOSHandler object
     * @function
     */
    function Main($log, $location, MainLogic, Loader, iOSHandler) {

        $log.debug('Loading Main Controller...');

        var vm = this;

        MainLogic.checkExistingUser();

        if (MainLogic.isLoggedIn()) {

            MainLogic.goToMenu();

        }

        vm.password = 'test';
        vm.username = 'test@test.com';
        vm.canRememberUser = MainLogic.isLSAvailable();

        vm.showLoader = Loader.isShowing;
        vm.showBackButton = showBackButton;

        vm.login = login;

        vm.goHome = MainLogic.goHome;
        vm.logout = MainLogic.logout;
        vm.goSignUp = MainLogic.goSignUp;
        vm.isLoggedIn = MainLogic.isLoggedIn;
        vm.isSignUpPage = MainLogic.isSignUpPage;

        return vm;

        /**
         * Log the user in.
         * @name login
         * @function
         */
        function login() {

            MainLogic.login(vm);

        }

        function showBackButton() {

            var pages = ['signup', 'menu', 'main'];
            return iOSHandler.isiOS() && !isCurrentPage(pages);

        }

        function isCurrentPage(pages) {

            for(var i = 0; i < pages.length; ++i) {

                if($location.path().indexOf(pages[i]) !== -1) {

                    return true;

                }

            }

            return false;

        }

    }

})();
