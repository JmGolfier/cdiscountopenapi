/**
 * @author Raphaël MARQUES
 * @copyright 2014-2015. All rights reserved.
 *
 * @file The iOSHandler handler file.
 * @module iOSHandler
 */

/**
 * iOSHandler IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('iOSHandler', iOSHandler);

    // Dependency injection
    iOSHandler.$inject = ['$log'];

    /**
     * The iOSHandler manage the requests.
     * @name iOSHandler
     * @param {Object} $log The AngularJS's $log object
     * @return {Object} The service
     * @function
     */
    function iOSHandler($log) {

        $log.debug('Loading iOSHandler...');

        var service =
        {

            iOS: false,

            isiOS: isiOS,
            check: check

        };

        return service;

        /**
         * check
         * @name check
         * @function
         */
        function check() {

            service.iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );

        }

        /**
         * isiOS
         * @name isiOS
         * @function
         */
        function isiOS() {

            return service.iOS;

        }

    }

})();
