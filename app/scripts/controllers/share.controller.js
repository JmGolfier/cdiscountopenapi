/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Share controller's file.
 * @module Share
 */

/**
 * Menu IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('Share', Share);

    // Dependency injection
    Share.$inject = ['$log', 'MainLogic', 'ShareLogic'];

    /**
     * The Share controller aims to manage the Application.
     * @name Share
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} ShareLogic The ShareLogic object
     * @function
     */
    function Share($log, MainLogic, ShareLogic) {

        $log.debug('Loading Share Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.friendName = '';
        vm.isPrivate = true;
        vm.friendsList = [];

        vm.share = share;
        vm.search = search;
        vm.addToList = addToList;
        vm.isValidForm = isValidForm;
        vm.closeResults = closeResults;
        vm.switchListType = switchListType;

        ShareLogic.setUp(vm);

        return vm;

        /**
         * share
         * @name share
         * @function
         */
        function share() {

            ShareLogic.share(vm);

        }

        /**
         * Check whether the form is valid or not.
         * @name isValidForm
         * @function
         */
        function isValidForm() {

            return !vm.isPrivate || vm.friendsList.length > 0;

        }

        /**
         * Switch the list type.
         * @name switchListType
         * @param {Boolean} listType The list type
         * @function
         */
        function switchListType(listType) {

            vm.isPrivate = listType;

        }

        /**
         * Add item to the list.
         * @name addToList
         * @param {Object} item The item to be added
         * @function
         */
        function addToList(item) {

            ShareLogic.addToList(item);
            vm.friendsList = ShareLogic.getFriends();
            console.log(vm.friendsList);
            closeResults();

        }

        /**
         * Launch the search.
         * @name search
         * @function
         */
        function search() {

            if (vm.friendName.trim() !== '') {

                ShareLogic.search(vm);

            }

        }

        /**
         * Close result view.
         * @name closeResults
         * @function
         */
        function closeResults() {

            vm.showResults = false;

        }

    }

})();
