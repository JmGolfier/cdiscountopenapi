/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The ListLogic handler file.
 * @module ListLogic
 */

/**
 * ListLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('ListLogic', ListLogic);

    // Dependency injection
    ListLogic.$inject = ['$log', '$location', 'MainLogic', 'List', 'Server'];

    /**
     * The ListLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} List The application's List object
     * @param {Object} Server The application's Server object
     * @return {Object} The factory
     * @function
     */
    function ListLogic($log, $location, MainLogic, List, Server) {

        $log.debug('Loading List Logic...');

        var factory =
        {

            search: search,
            getTotal: getTotal,
            clearList: List.reset,
            addToList: List.addItem,
            getProducts: getProducts,
            saveAndShare: saveAndShare

        };

        return factory;

        /**
         * saveAndShare
         * @name saveAndShare
         * @function
         */
        function saveAndShare(viewModel) {

            var awesomeList =
            {
                name: viewModel.listName,
                owner: MainLogic.user._id,
                products: viewModel.productList,
                endDate: viewModel.dateEnd,
                code: '',
                public: false,
                sharedWith: []
            };

            console.log(awesomeList);

            List.editingList = awesomeList;

            $location.path('/shareList');

        }

        /**
         * Sum the prices of the list's items.
         * @name getTotal
         * @function
         */
        function getTotal() {

            var sum = 0;

            for(var i = 0; i < List.items.length; ++i) {

                sum += parseFloat(List.items[i].price);

            }

            return sum;

        }

        /**
         * Retrieve the list.
         * @name getProducts
         * @function
         */
        function getProducts() {

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

            Server.get('products/' + viewModel.productName, successCallback, errorCallback);

        }

    }

})();
