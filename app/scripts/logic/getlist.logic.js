/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The GetListLogic handler file.
 * @module GetListLogic
 */

/**
 * GetListLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('GetListLogic', GetListLogic);

    // Dependency injection
    GetListLogic.$inject = ['$log', '$location', 'MainLogic', 'Server'];

    /**
     * The GetListLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function GetListLogic($log, $location, MainLogic, Server) {

        $log.debug('Loading GetList Logic...');

        var factory =
        {

            look: look

        };

        return factory;

        /**
         * look
         * @name look
         * @param {Object} viewModel The GetList controller
         * @function
         */
        function look(viewModel) {

            var listCallback =
                function (data) {

                    console.log('list:', data);


                    data.total = 0;

                    for (var j = 0; j < data.products.length; ++j) {

                        data.total += parseFloat(data.products[j].price);

                    }

                    data.total = data.total.toFixed(2);


                    viewModel.list = data;
                    viewModel.hasList = true;
                    viewModel.foundList = true;

                };

            var errorCallback =
                function () {

                    viewModel.list = null;
                    viewModel.hasList = true;
                    viewModel.foundList = false;

                };

            Server.get('lists/' + viewModel.code, listCallback, errorCallback);

        }

    }

})();
