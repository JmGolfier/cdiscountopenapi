/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The FriendsListLogic handler file.
 * @module FriendsListLogic
 */

/**
 * FriendsListLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('FriendsListLogic', FriendsListLogic);

    // Dependency injection
    FriendsListLogic.$inject = ['$log', '$location', 'MainLogic', 'Server'];

    /**
     * The FriendsListLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function FriendsListLogic($log, $location, MainLogic, Server) {

        $log.debug('Loading FriendsList Logic...');

        var factory =
        {

            setUp: setUp,
            editFriend: editFriend

        };

        return factory;

        /**
         * setUp
         * @name setUp
         * @param {Object} viewModel The FriendsList controller
         * @function
         */
        function setUp(viewModel) {

            var friendsCallback =
                function(data) {

                    console.log('friends:', data);
                    viewModel.list = data;

                };

            Server.get('friends/' + MainLogic.user._id, friendsCallback);

        }

        /**
         * editFriend
         * @name editFriend
         * @function
         */
        function editFriend(id) {

            $location.path('/editFriend/' + id);

        }

    }

})();
