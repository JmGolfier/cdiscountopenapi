/**
 * @author Raphaël MARQUES
 * @copyright 2014-2015. All rights reserved.
 *
 * @file The cut handler file.
 * @module cut
 */

/**
 * cut IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .filter('cut', cut);

    /**
     * The cut filter.
     * @name cut
     * @function
     */
    function cut() {

        return function (value, wordwise, max, tail) {

            if(!value) {
                return '';
            }

            max = parseInt(max, 10);

            if(!max) {
                return value;
            }

            if(value.length <= max){
                return value;
            }

            value = value.substr(0, max);

            if (wordwise) {
                var lastspace = value.lastIndexOf(' ');

                if (lastspace !== -1) {
                    value = value.substr(0, lastspace);
                }
            }

            return value + (tail || ' …');

        };

    }

})();
