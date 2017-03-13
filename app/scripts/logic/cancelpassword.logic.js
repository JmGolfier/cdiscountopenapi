/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The CancelPasswordLogic handler file.
 * @module CancelPasswordLogic
 */

/**
 * CancelPasswordLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('CancelPasswordLogic', CancelPasswordLogic);

    // Dependency injection
    CancelPasswordLogic.$inject = ['$log', 'Server'];

    /**
     * The CancelPasswordLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} Server The application's Server object
     * @param {Object} Crypto The application's Server object
     * @param {Object} StringService The application's Server object
     * @return {Object} The factory
     * @function
     */
    function CancelPasswordLogic($log, Server, Crypto, StringService) {

        $log.debug('Loading CancelPassword Logic...');

        var factory =
        {

            send: send

        };

        return factory;

        /**
         * send
         * @name send
         * @param {Object} viewModel The CancelPassword controller
         * @function
         */
        function send(viewModel) {

            var dataCallback =
                    function () {

                        console.log('Successfully cancelled password change request!');
                        viewModel.success = true;

                    },

                errorCallback =
                    function () {

                        console.log('Problème à l\'annulation du mot de passe.');
                        viewModel.error = true;
                        viewModel.errorMessage = 'Une erreur est survenue';

                    },

                data =
                {
                    token: viewModel.token
                };

            Server.post('cancelpassword', data, dataCallback, errorCallback);

        }

    }

})();
