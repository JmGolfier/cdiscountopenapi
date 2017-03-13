/**
 * @author Raphaël MARQUES
 * @copyright 2014-2015. All rights reserved.
 *
 * @file The Server handler file.
 * @module Server
 */

/**
 * Server IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('Server', Server);

    // Dependency injection
    Server.$inject = ['$log', '$http'];

    /**
     * The Server manage the requests.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $http The AngularJS's $http object
     * @return {Object} The service
     * @function
     */
    function Server($log, $http) {

        $log.debug('Loading Server...');

        var service =
        {

            get: get,
            put: put,
            post: post,
            remove: remove,

            errorCallback: errorCallback,
            successCallback: successCallback,

            URL: 'http://chift-server.herokuapp.com/' // 'http://192.168.43.121:8080/'

        };

        return service;

        /**
         * Handle callbacks for server.
         * @name handleCallbacks
         * @param {Function} successCallback The callback to give the received resource to
         * @param {Function} errorCallback The callback if the request fail
         * @function
         */
        function handleCallbacks(successCallback, errorCallback) {

            var callbacks =
            {
                errorCallback: errorCallback,
                successCallback: successCallback
            };

            if (!errorCallback) {

                callbacks.errorCallback = service.errorCallback;

            }

            if (!successCallback) {

                callbacks.successCallback = service.successCallback;

            }

            return callbacks;

        }

        /**
         * GET from server.
         * @name get
         * @param {String} resource The resource to GET from the server
         * @param {Object} successCallback The callback to give the received resource to
         * @param {Function} errorCallback The callback if the request fail
         * @function
         */
        function get(resource, successCallback, errorCallback) {

            $log.debug('GET:', service.URL + resource);

            var callbacks = handleCallbacks(successCallback, errorCallback);
            $http.get(service.URL + resource).success(callbacks.successCallback).error(callbacks.errorCallback);

        }

        /**
         * PUT to server.
         * @name put
         * @param {String} resource The resource to PUT to the server
         * @param {Object} data The data to PUT
         * @param {Function} successCallback The callback to give the received resource to
         * @param {Function} errorCallback The callback if the request fail
         * @function
         */
        function put(resource, data, successCallback, errorCallback) {

            $log.debug('PUT:', service.URL + resource, 'with', data);

            var callbacks = handleCallbacks(successCallback, errorCallback);
            $http.put(service.URL + resource, data).success(callbacks.successCallback).error(callbacks.errorCallback);

        }

        /**
         * POST to server.
         * @name post
         * @param {String} resource The resource to POST to the server
         * @param {Object} data The data to POST
         * @param {Function} successCallback The callback to give the received resource to
         * @param {Function} errorCallback The callback if the request fail
         * @function
         */
        function post(resource, data, successCallback, errorCallback) {

            $log.debug('POST:', service.URL + resource, 'with', data);

            var callbacks = handleCallbacks(successCallback, errorCallback);
            $http.post(service.URL + resource, data).success(callbacks.successCallback).error(callbacks.errorCallback);

        }

        /**
         * DELETE on server.
         * @name remove
         * @param {String} resource The resource to DELETE from the server
         * @param {Function} successCallback The callback to give the received resource to
         * @param {Function} errorCallback The callback if the request fail
         * @function
         */
        function remove(resource, successCallback, errorCallback) {

            $log.debug('DELETE:', service.URL + resource);

            var callbacks = handleCallbacks(successCallback, errorCallback);
            $http.delete(service.URL + resource).success(callbacks.successCallback).error(callbacks.errorCallback);

        }

        /**
         * Success callback when the request succeed.
         * @name successCallback
         * @param {Object} data
         * @param {Object} status
         * @param {Object} headers
         * @param {Object} config
         * @function
         */
        function successCallback(data, status, headers, config) {

            $log.info('Request success:', status);

        }

        /**
         * Error callback when the request fail.
         * @name errorCallback
         * @param {Object} data
         * @param {Object} status
         * @param {Object} headers
         * @param {Object} config
         * @function
         */
        function errorCallback(data, status, headers, config) {

            $log.error('Request error:', status);

        }

    }

})();
