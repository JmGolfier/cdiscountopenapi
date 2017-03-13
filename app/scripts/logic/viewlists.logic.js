/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ViewListsLogic handler file.
 * @module ViewListsLogic
 */

/**
 * ViewListsLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('ViewListsLogic', ViewListsLogic);

    // Dependency injection
    ViewListsLogic.$inject = ['$log', '$location', 'MainLogic', 'List', 'Server'];

    /**
     * The ViewListsLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} List The application's List object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function ViewListsLogic($log, $location, MainLogic, List, Server) {

        $log.debug('Loading List Logic...');

        var factory =
        {

            setUp: setUp

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

                    console.log(data);

                    for(var i = 0; i < data.length; ++i) {

                        data[i].total = 0;

                        for(var j = 0; j < data[i].products.length; ++j) {

                            data[i].total += parseFloat(data[i].products[j].price);

                        }

                        data[i].total = data[i].total.toFixed(2);

                    }

                    viewModel.lists = data;

                };

            var path = (viewModel.type === 'simple' ? 'listsOwner' : 'sharedLists');

            Server.get(path + '/' + MainLogic.user._id, dataCallback);

        }

    }

})();
