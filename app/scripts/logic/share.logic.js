/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ShareLogic handler file.
 * @module ShareLogic
 */

/**
 * ShareLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('ShareLogic', ShareLogic);

    // Dependency injection
    ShareLogic.$inject = ['$log', '$location', 'MainLogic', 'List', 'Server'];

    /**
     * The ShareLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} List The application's List object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function ShareLogic($log, $location, MainLogic, List, Server) {

        $log.debug('Loading List Logic...');

        var factory =
        {

            share: share,
            setUp: setUp,
            search: search,
            clearList: List.reset,
            addToList: List.addItem,
            getFriends: getFriends

        };

        return factory;

        /**
         * setUp
         * @name setUp
         * @function
         */
        function setUp(viewModel) {

            List.reset();

            var dataCallback =
                function(data) {

                    viewModel.code = data.code;

                };

            Server.get('listCode', dataCallback);

        }

        /**
         * share
         * @name share
         * @function
         */
        function share(viewModel) {

            var list = List.editingList;

            list.code = viewModel.code;
            list.public = !viewModel.isPrivate;
            list.sharedWith = viewModel.friendsList;

            var dataCallback =
                function(data) {

                    console.log('Successfully saved list:', data);
                    $location.path('/menu');

                };

            Server.post('lists', list, dataCallback);
        }

        /**
         * Retrieve the list.
         * @name getFriends
         * @function
         */
        function getFriends() {

            return List.items;

        }

        /**
         * Launch the search.
         * @name search
         * @param {Object} viewModel The List controller
         * @function
         */
        function search(viewModel) {

            viewModel.results = [];

            var successCallback =
                function (data) {

                    if (data && data.length > 0) {

                        console.log(data);
                        viewModel.hasResults = true;
                        viewModel.results = data;

                    } else {

                        viewModel.hasResults = false;

                    }

                    viewModel.showResults = true;

                };

            var errorCallback =
                function () {

                    viewModel.hasResults = false;
                    viewModel.showResults = true;

                };

            Server.get('users?q=' + viewModel.friendName, successCallback, errorCallback);

        }

    }

})();
