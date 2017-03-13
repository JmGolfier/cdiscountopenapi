/**
 * @author Raphael MARQUES
 * @copyright goalmap 2014-2015. All rights reserved.
 *
 * @file The Loader handler file.
 * @module Loader
 */

/**
 * Loader IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('Loader', Loader);

    /**
     * The Loader factory intend to facilitate data encryption and decryption through controllers.
     * @name Loader
     * @return {Object} The factory
     * @function
     */
    function Loader() {

        var service =
        {
            locked: false,
            showing: false,

            requestsToShow: 0,

            show: show,
            hide: hide,
            lock: lock,
            unlock: unlock,
            isLocked: isLocked,
            isShowing: isShowing
        };

        return service;

        /**
         * show
         * @name show
         * @function
         */
        function show() {

            if(!service.locked) {

                service.showing = true;

                ++service.requestsToShow;

            }

        }

        /**
         * hide
         * @name hide
         * @function
         */
        function hide() {

            if(!service.locked) {

                if(--service.requestsToShow <= 0) {

                    service.showing = false;

                }

            }

        }

        /**
         * isShowing
         * @name isShowing
         * @function
         */
        function isShowing() {

            return service.showing;

        }

        /**
         * lock
         * @name lock
         * @function
         */
        function lock() {

            service.locked = true;

        }

        /**
         * unlock
         * @name unlock
         * @function
         */
        function unlock() {

            service.locked = false;

        }

        /**
         * isLocked
         * @name isLocked
         * @function
         */
        function isLocked() {

            return service.locked;

        }

    }

})();
