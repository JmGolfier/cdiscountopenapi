/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The application's configuration file.
 * @module app-config
 */

/**
 * app-config IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .config(config);

    // Dependency injection
    config.$inject = ['$logProvider', '$httpProvider', 'atYourEaseConstants'];

    /**
     * Provides all the configuration the application needs.
     * @name config
     * @param {Object} $logProvider The AngularJS $logProvider object
     * @param {Object} $httpProvider The AngularJS $httpProvider object
     * @param {Object} atYourEaseConstants The application's constants object
     * @function
     */
    function config($logProvider, $httpProvider, atYourEaseConstants) {

        $httpProvider.interceptors.push('LoaderInterceptor');

        $logProvider.debugEnabled(atYourEaseConstants.DEBUG);

    }

})();
