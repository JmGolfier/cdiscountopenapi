/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The FriendsList controller's file.
 * @module FriendsList
 */

/**
 * FriendsList IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('FriendsList', FriendsList);

    // Dependency injection
    FriendsList.$inject = ['$log', 'MainLogic', 'FriendsListLogic'];

    /**
     * The FriendsList controller aims to manage the Application.
     * @name FriendsList
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} FriendsListLogic The FriendsListLogic object
     * @function
     */
    function FriendsList($log, MainLogic, FriendsListLogic) {

        $log.debug('Loading FriendsList Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        FriendsListLogic.setUp(vm);

        vm.editFriend = FriendsListLogic.editFriend;

        return vm;

    }

})();
