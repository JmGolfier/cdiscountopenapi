/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The EditListLogic handler file.
 * @module EditListLogic
 */

/**
 * EditListLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('EditListLogic', EditListLogic);

    // Dependency injection
    EditListLogic.$inject = ['$log', '$location', 'MainLogic', 'Server'];

    /**
     * The EditListLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} List The application's List object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function EditListLogic($log, $location, MainLogic, Server) {

        $log.debug('Loading List Logic...');

        var factory =
        {

            save: save,
            setUp: setUp,
            deleteList: deleteList

        };

        return factory;

        function save(viewModel) {

            var dataCallback =
                function(data) {

                    console.log('Saved list:', data);
                    viewModel.success = true;
                    viewModel.error = false;

                };

            var errorCallback =
                function() {

                    viewModel.errorMessage = 'Une erreur est survenue';
                    viewModel.success = false;
                    viewModel.error = true;

                };

            Server.put('lists/' + viewModel.listId, viewModel.list, dataCallback, errorCallback);

        }

        function deleteList(viewModel) {

            var dataCallback =
                function(data) {

                    $location.path('/menu');

                };

            var errorCallback =
                function() {

                    viewModel.errorMessage = 'Une erreur est survenue';
                    viewModel.success = false;
                    viewModel.error = true;

                };

            Server.remove('lists/' + viewModel.listId, dataCallback, errorCallback);

        }

        /**
         * setUp
         * @name setUp
         * @function
         */
        function setUp(viewModel) {

            var dataCallback =
                function(data) {

                    console.log('Retrieved list:', data);

                    viewModel.list = data;
                    viewModel.isOwner = (data.owner !== MainLogic.user._id);

                };

            Server.get('lists/' + viewModel.listId, dataCallback);

        }

    }

})();
