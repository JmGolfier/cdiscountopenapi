/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The application's routes configuration file.
 * @module app-route
 */

/**
 * route-config IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .config(config);

    // Dependency injection
    config.$inject = ['$routeProvider'];

    /**
     * Provides all the routes the application needs.
     * @name config
     * @param {Object} $routeProvider The AngularJS $routeProvider object
     * @function
     */
    function config($routeProvider) {

        $routeProvider
            .when('/', {

                redirectTo: '/main'

            })

            .when('/main', {

                templateUrl: 'views/main.html',
                controller: 'Main',
                controllerAs: 'main'

            })

            .when('/account', {

                templateUrl: 'views/account.html',
                controller: 'Account',
                controllerAs: 'account'

            })

            .when('/signup', {

                templateUrl: 'views/signup.html',
                controller: 'Signup',
                controllerAs: 'signup'

            })

            .when('/lostpassword', {

                templateUrl: 'views/lostpassword.html',
                controller: 'LostPassword',
                controllerAs: 'lostpassword'

            })

            .when('/changepassword/:token', {

                templateUrl: 'views/changepassword.html',
                controller: 'ChangePassword',
                controllerAs: 'changepassword'

            })

            .when('/cancelpassword/:token', {

                templateUrl: 'views/cancelpassword.html',
                controller: 'CancelPassword',
                controllerAs: 'cancelpassword'

            })

            .when('/viewLists', {

                templateUrl: 'views/viewlists.html',
                controller: 'ViewLists',
                controllerAs: 'viewlists',
                resolve: {
                    type: function() {
                        return 'simple';
                    }
                }

            })

            .when('/viewSharedLists', {

                templateUrl: 'views/viewlists.html',
                controller: 'ViewLists',
                controllerAs: 'viewlists',
                resolve: {
                    type: function() {
                        return 'shared';
                    }
                }

            })

            .when('/editList/:listId', {

                templateUrl: 'views/editlist.html',
                controller: 'EditList',
                controllerAs: 'editlist'

            })

            .when('/friendsList', {

                templateUrl: 'views/friendslist.html',
                controller: 'FriendsList',
                controllerAs: 'friendslist'

            })

            .when('/lookForAFriend', {

                templateUrl: 'views/lookForAFriend.html',
                controller: 'LookForAFriend',
                controllerAs: 'lookforafriend'

            })

            .when('/editFriend/:id', {

                templateUrl: 'views/editFriend.html',
                controller: 'EditFriend',
                controllerAs: 'editfriend'

            })

            .when('/menu', {

                templateUrl: 'views/menu.html',
                controller: 'Menu',
                controllerAs: 'menu'

            })

            .when('/createList', {

                templateUrl: 'views/createlist.html',
                controller: 'CreateList',
                controllerAs: 'createList'

            })

            .when('/getList', {

                templateUrl: 'views/getlist.html',
                controller: 'GetList',
                controllerAs: 'getlist'

            })

            .when('/simpleList', {

                templateUrl: 'views/firstStep.html',
                controller: 'List',
                controllerAs: 'list',
                resolve: {
                    type: function () {
                        return 'simple';
                    }
                }

            })

            .when('/voteList', {

                templateUrl: 'views/firstStep.html',
                controller: 'List',
                controllerAs: 'list',
                resolve: {
                    type: function () {
                        return 'vote';
                    }
                }

            })

            .when('/fundList', {

                templateUrl: 'views/firstStep.html',
                controller: 'List',
                controllerAs: 'list',
                resolve: {
                    type: function () {
                        return 'fund';
                    }
                }

            })

            .when('/shareList', {

                templateUrl: 'views/secondStep.html',
                controller: 'Share',
                controllerAs: 'share'

            })

            .when('/logout', {

                templateUrl: 'views/logout.html',
                controller: 'Logout',
                controllerAs: 'logout'

            })

            .otherwise({
                redirectTo: '/main'
            });

    }

})();
