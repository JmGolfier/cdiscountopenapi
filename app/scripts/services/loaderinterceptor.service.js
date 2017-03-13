/**
 * @author Raphael MARQUES
 * @copyright goalmap 2014-2015. All rights reserved.
 *
 * @file The LoaderInterceptor handler file.
 * @module LoaderInterceptor
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
        .factory('LoaderInterceptor', LoaderInterceptor);

    // Dependency injection
    LoaderInterceptor.$inject = ['$q', '$timeout', 'Loader'];

    /**
     * The LoaderInterceptor
     * @name LoaderInterceptor
     * @return {Object} The factory
     * @function
     */
    function LoaderInterceptor($q, $timeout, Loader) {

        return {

            request: function request(config) {

                Loader.show();
                return config;

            },

            requestError: function requestError(rejection) {

                Loader.hide();
                return $q.reject(rejection);

            },

            response: function response(responseParam) {

                Loader.hide();

                var defer = $q.defer();

                $timeout(function() {

                    defer.resolve(responseParam);

                }, 0);

                return defer.promise;

            },

            responseError: function responseError(rejection) {

                Loader.hide();
                return $q.reject(rejection);

            }

        };

    }

})();
