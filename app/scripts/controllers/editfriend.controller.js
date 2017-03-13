/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The EditFriend controller's file.
 * @module EditFriend
 */

/**
 * EditFriend IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('EditFriend', EditFriend);

    // Dependency injection
    EditFriend.$inject = ['$log', '$routeParams', 'MainLogic', 'EditFriendLogic'];

    /**
     * The EditFriend controller aims to manage the Application.
     * @name EditFriend
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $routeParams The AngularJS's $routeParams object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} EditFriendLogic The EditFriendLogic object
     * @function
     */
    function EditFriend($log, $routeParams, MainLogic, EditFriendLogic) {

        $log.debug('Loading EditFriend Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.friend = $routeParams.id;

        EditFriendLogic.setUp(vm);

        vm.deleteFriend = EditFriendLogic.deleteFriend;

        return vm;

    }

})();
