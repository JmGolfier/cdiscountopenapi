/**
 * @author Raphaël MARQUES
 * @copyright 2014-2015. All rights reserved.
 *
 * @file The List handler file.
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
        .service('List', List);

    // Dependency injection
    List.$inject = ['$log'];

    /**
     * The List manage the requests.
     * @name List
     * @param {Object} $log The AngularJS's $log object
     * @return {Object} The service
     * @function
     */
    function List($log) {

        $log.debug('Loading List...');

        var service =
        {

            items: [],

            editingList: null,

            reset: reset,
            addItem: addItem,
            removeItem: removeItem

        };

        return service;

        /**
         * Reset the list.
         * @name reset
         * @function
         */
        function reset() {

            service.items = [];

        }

        /**
         * Add an item to the list.
         * @name addItem
         * @param {Object} item The item to be added to the list
         * @function
         */
        function addItem(item) {

            item.uuid = btoa(item.url + new Date().getTime());

            service.items.push(item);

        }

        /**
         * Remove an item from the list.
         * @name removeItem
         * @param {String} uuid The item's uuid to be removed from the list
         * @function
         */
        function removeItem(uuid) {

            for(var i = 0; i < service.items.length; ++i) {

                if(service.items[i].uuid === uuid) {

                    service.items.slice(i, 1);
                    break;

                }

            }

        }

    }

})();
