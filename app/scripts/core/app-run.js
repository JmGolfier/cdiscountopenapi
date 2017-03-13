/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The application's run file.
 * @module app-run
 */

/**
 * app-run IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .run(run);

    // Dependency injection
    run.$inject = ['iOSHandler'];

    /**
     * Provides the run configuration for the application.
     * @name run
     * @function
     */
    function run(iOSHandler) {

        iOSHandler.check();

        console.log('Is the device an iOS?', iOSHandler.isiOS());

    }

})();
