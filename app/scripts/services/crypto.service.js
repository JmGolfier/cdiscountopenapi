/**
 * @author Raphael MARQUES
 * @copyright goalmap 2014-2015. All rights reserved.
 *
 * @file The Crypto handler file.
 * @module Crypto
 */

/**
 * Crypto IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('Crypto', Crypto);

    /**
     * The Crypto factory intend to facilitate data encryption and decryption through controllers.
     * @name Crypto
     * @return {Object} The factory
     * @function
     */
    function Crypto() {

        var service =
        {
            encode: encode,
            decode: decode,
            encrypt: encrypt,
            createHash: createHash
        };

        return service;

        /**
         * Hash data.
         * @name createHash
         * @param {String} dataA The first data to be hashed
         * @param {String} dataB The second data to be hashed
         * @return {String} The hashed data
         * @function
         */
        function createHash(dataA, dataB) {

            return encrypt(
                encrypt(dataA).toString() +
                encrypt(dataB).toString()
            ).toString();

        }

        /**
         * Encrypt data.
         * @name encrypt
         * @param {String} data The data to be encrypted
         * @return {String} The encrypted data
         * @function
         */
        function encrypt(data) {

            /* jshint ignore:start */
            return CryptoJS.SHA512(data);
            /* jshint ignore:end */

        }

        /**
         * Encode data.
         * @name encode
         * @param {String} data The data to be encoded
         * @return {String} The encoded data
         * @function
         */
        function encode(data) {

            return encodeURIComponent(atob(data));

        }

        /**
         * Decode data.
         * @name decode
         * @param {String} data The data to be decoded
         * @return {String} The decoded data
         * @function
         */
        function decode(data) {

            return btoa(decodeURIComponent(data));

        }

    }

})();
