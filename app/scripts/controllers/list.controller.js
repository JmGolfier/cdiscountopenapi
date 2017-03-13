/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The List controller's file.
 * @module List
 */

/**
 * List IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('List', List);

    // Dependency injection
    List.$inject = ['$log', 'MainLogic', 'ListLogic', 'type'];

    /**
     * The List controller aims to manage the Application.
     * @name List
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} ListLogic The ListLogic object
     * @param {String} type The type of the list
     * @function
     */
    function List($log, MainLogic, ListLogic, type) {

        $log.debug('Loading ' + type + 'List Controller...');

        var vm = this;

        if (!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.search = search;
        vm.addToList = addToList;
        vm.isValidForm = isValidForm;
        vm.closeResults = closeResults;
        vm.saveAndShare = saveAndShare;
        vm.getTotal = ListLogic.getTotal;

        vm.type = type;
        vm.listName = '';
        vm.productName = '';
        vm.productList = [];

        ListLogic.clearList();

        return vm;

        /**
         * saveAndShare
         * @name saveAndShare
         * @function
         */
        function saveAndShare() {

            ListLogic.saveAndShare(vm);

        }

        /**
         * Check whether the form is valid or not.
         * @name isValidForm
         * @function
         */
        function isValidForm() {

            if(vm.type !== 'simple' && !vm.endDate) {

                return false;

            }

            return vm.listName.trim() !== '' && vm.productList.length > 0;

        }

        /**
         * Add item to the list.
         * @name addToList
         * @param {Object} item The item to be added
         * @function
         */
        function addToList(item) {

            ListLogic.addToList(item);
            vm.productList = ListLogic.getProducts();
            closeResults();

        }

        /**
         * Launch the search.
         * @name search
         * @function
         */
        function search() {

            if (vm.productName.trim() !== '') {

                ListLogic.search(vm);

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
