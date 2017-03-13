/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The LookForAFriendLogic handler file.
 * @module LookForAFriendLogic
 */

/**
 * LookForAFriendLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('LookForAFriendLogic', LookForAFriendLogic);

    // Dependency injection
    LookForAFriendLogic.$inject = ['$log', '$location', 'MainLogic', 'Server'];

    /**
     * The LookForAFriendLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function LookForAFriendLogic($log, $location, MainLogic, Server) {

        $log.debug('Loading LookForAFriend Logic...');

        var factory =
        {

            add: add,
            look: look,
            cancel: cancel

        };

        return factory;

        /**
         * look
         * @name look
         * @param {Object} viewModel The LookForAFriend controller
         * @function
         */
        function look(viewModel) {

            var friendCallback =
                function(data) {

                    viewModel.error = false;
                    viewModel.foundFriend = true;

                    viewModel.friend = data;

                };

            var friendErrorCallback =
                function(data) {

                    viewModel.error = true;
                    viewModel.foundFriend = false;
                    viewModel.errorMessage = data.message;

                };

            Server.post('friends/' + viewModel.email, {}, friendCallback, friendErrorCallback);

        }

        /**
         * cancel
         * @name cancel
         * @param {Object} viewModel The LookForAFriend controller
         * @function
         */
        function cancel(viewModel) {

            viewModel.foundFriend = false;
            viewModel.friend = null;

        }

        /**
         * add
         * @name add
         * @param {Object} viewModel The LookForAFriend controller
         * @function
         */
        function add(viewModel) {

            var friendCallback =
                function(data) {

                    console.log('Added friend!', data);
                    $location.path('/friendsList');

                };

            Server.put('friends/' + MainLogic.user._id + '/' + viewModel.friend._id, {}, friendCallback);

        }

    }

})();
