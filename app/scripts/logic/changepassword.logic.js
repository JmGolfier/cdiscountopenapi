/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ChangePasswordLogic handler file.
 * @module ChangePasswordLogic
 */

/**
 * ChangePasswordLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('ChangePasswordLogic', ChangePasswordLogic);

    // Dependency injection
    ChangePasswordLogic.$inject = ['$log', 'Server', 'Crypto', 'StringService'];

    /**
     * The ChangePasswordLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} Server The application's Server object
     * @param {Object} Crypto The application's Server object
     * @param {Object} StringService The application's Server object
     * @return {Object} The factory
     * @function
     */
    function ChangePasswordLogic($log, Server, Crypto, StringService) {

        $log.debug('Loading ChangePassword Logic...');

        var factory =
        {

            send: send

        };

        return factory;

        /**
         * send
         * @name send
         * @param {Object} viewModel The ChangePassword controller
         * @function
         */
        function send(viewModel) {

            if (
                StringService.isValid(
                    [
                        viewModel.email,
                        viewModel.password
                    ]
                )
            ) {

                var hash = Crypto.createHash(viewModel.email, viewModel.password),

                    dataCallback =
                        function () {

                            console.log('Successfully change password!');
                            viewModel.success = true;

                        },

                    errorCallback =
                        function () {

                            console.log('Problème au changement de mot de passe.');
                            viewModel.error = true;
                            viewModel.errorMessage = 'Une erreur est survenue';

                        },

                    data =
                    {
                        token: viewModel.token,
                        email: viewModel.email,
                        hash: hash
                    };

                Server.post('changepassword', data, dataCallback, errorCallback);

            } else {

                viewModel.error = true;
                viewModel.errorMessage = 'Certaines données sont manquantes ou erronées.';

            }

        }

    }

})();
