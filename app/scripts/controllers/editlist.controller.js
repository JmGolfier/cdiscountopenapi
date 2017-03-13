/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The EditList controller's file.
 * @module EditList
 */

/**
 * Menu IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('EditList', EditList);

    // Dependency injection
    EditList.$inject = ['$log', '$routeParams', 'MainLogic', 'EditListLogic'];

    /**
     * The EditList controller aims to manage the Application.
     * @name EditList
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $routeParams The AngularJS's $routeParams object
     * @param {Object} MainLogic The MainLogic object
     * @param {Object} EditListLogic The EditListLogic object
     * @function
     */
    function EditList($log, $routeParams, MainLogic, EditListLogic) {

        $log.debug('Loading EditList Controller...');

        var vm = this;

        if (!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.listId = $routeParams.listId;

        vm.save = saveList;
        vm.getTotal = getTotal;
        vm.deleteList = deleteList;

        EditListLogic.setUp(vm);

        return vm;

        function getTotal() {

            var total = 0;

            if (vm.list) {

                for (var j = 0; j < vm.list.products.length; ++j) {

                    total += parseFloat(vm.list.products[j].price);

                }

            }

            return total.toFixed(2);

        }

        function saveList() {

            EditListLogic.save(vm);

        }

        function deleteList() {

            var ans = window.confirm('Etes-vous sur de vouloir supprimer la liste : "' + vm.list.name + '" ?');

            if(ans) {

                EditListLogic.deleteList(vm);

            }

        }

    }

})();
