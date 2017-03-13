/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The LostPasswordLogic handler file.
 * @module LostPasswordLogic
 */

/**
 * LostPasswordLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('LostPasswordLogic', LostPasswordLogic);

    // Dependency injection
    LostPasswordLogic.$inject = ['$log', 'Server'];

    /**
     * The LostPasswordLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function LostPasswordLogic($log, Server) {

        $log.debug('Loading LostPassword Logic...');

        var factory =
        {

            send: send

        };

        return factory;

        /**
         * send
         * @name send
         * @param {Object} viewModel The LostPassword controller
         * @function
         */
        function send(viewModel) {

            var dataCallback =
                function(data) {

                    console.log('Received token:', data.token);
                    viewModel.error = false;
                    viewModel.token = data.token;
                    //$location.path('/changepassword/' + token);

                };

            var errorCallback =
                function() {

                    viewModel.error = true;

                };

            Server.post('lostpassword', {email: viewModel.email}, dataCallback, errorCallback);

        }

    }

})();
