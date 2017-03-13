/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The EditFriendLogic handler file.
 * @module EditFriendLogic
 */

/**
 * EditFriendLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('EditFriendLogic', EditFriendLogic);

    // Dependency injection
    EditFriendLogic.$inject = ['$log', '$location', 'MainLogic', 'Server'];

    /**
     * The EditFriendLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function EditFriendLogic($log, $location, MainLogic, Server) {

        $log.debug('Loading EditFriend Logic...');

        var factory =
        {

            setUp: setUp,
            deleteFriend: deleteFriend

        };

        return factory;

        /**
         * setUp
         * @name setUp
         * @param {Object} viewModel The EditFriend controller
         * @function
         */
        function setUp(viewModel) {

            var friendCallback =
                function(data) {

                    console.log('friend:', data);
                    viewModel.friend = data;

                };

            Server.get('users/' + viewModel.friend, friendCallback);

        }

        /**
         * deleteFriend
         * @name deleteFriend
         * @function
         */
        function deleteFriend(id) {

            var ans = window.confirm('Are you sure about deleting this friend?');

            if(ans) {

                var friendCallback =
                    function(data) {

                        $location.path('/friendsList');

                    };

                Server.remove('friends/' + MainLogic.user._id + '/' + id, friendCallback);

            }

        }

    }

})();
