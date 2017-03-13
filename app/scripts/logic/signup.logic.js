/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The SignupLogic handler file.
 * @module SignupLogic
 */

/**
 * SignupLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('SignupLogic', SignupLogic);

    // Dependency injection
    SignupLogic.$inject = ['$log', '$location', 'MainLogic', 'Server', 'Crypto', 'StringService'];

    /**
     * The SignupLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} Server The application's Server object
     * @param {Object} Crypto The application's Crypto object
     * @param {Object} StringService The application's StringService object
     * @return {Object} The factory
     * @function
     */
    function SignupLogic($log, $location, MainLogic, Server, Crypto, StringService) {

        $log.debug('Loading Signup Logic...');

        var factory =
        {

            signup: signup

        };

        return factory;

        /**
         * Add user to Chift.
         * @name signup
         * @param {Object} viewModel The Signup controller
         * @function
         */
        function signup(viewModel) {

            /* jshint ignore:start */

            if(
                StringService.isValid(
                    [
                        viewModel.user.firstname,
                        viewModel.user.lastname,
                        viewModel.user.pseudo,
                        viewModel.user.email,
                        viewModel.confirm_password,
                        viewModel.password
                    ]
                ) &&
                viewModel.password === viewModel.confirm_password
            ) {

                viewModel.user.hash = Crypto.createHash(viewModel.user.email, viewModel.password);

                var successCallback =
                    function (data) {

                        MainLogic.user = data;
                        MainLogic.loggedIn = true;

                        $location.path('/menu');

                    };

                var errorCallback =
                    function (data) {

                        viewModel.error = true;
                        viewModel.errorMessage = data.message;

                    };

                Server.post('users', viewModel.user, successCallback, errorCallback);

            } else {

                viewModel.error = true;
                viewModel.errorMessage = 'Certaines données sont manquantes ou erronées.';

            }

            /* jshint ignore:end */

        }

    }

})();
