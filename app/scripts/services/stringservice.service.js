/**
 * @author Raphael MARQUES
 * @copyright goalmap 2014-2015. All rights reserved.
 *
 * @file The StringService handler file.
 * @module StringService
 */

/**
 * StringService IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('StringService', StringService);

    /**
     * The StringService factory intend to facilitate data encryption and decryption through controllers.
     * @name StringService
     * @return {Object} The factory
     * @function
     */
    function StringService() {

        var service =
        {
            isValid: isValid
        };

        return service;

        /**
         * Check string(s).
         * @name isValid
         * @param {String} data The string to be checked
         * @param {Array} data The strings to be checked
         * @return {Boolean} The fact that the string is valid
         * @function
         */
        function isValid(data) {

            if(data instanceof Array) {

                for(var i = 0; i < data.length; ++i) {

                    if(data[i] === null || data[i] === undefined || data[i].trim() === '') {

                        return false;

                    }

                }

            } else if(typeof data === 'string') {

                return data !== null && data !== undefined && data.trim() !== '';

            } else {

                return false;

            }

            return true;

        }

    }

})();
