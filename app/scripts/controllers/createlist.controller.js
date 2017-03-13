/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The CreateList controller's file.
 * @module CreateList
 */

/**
 * CreateList IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .controller('CreateList', CreateList);

    // Dependency injection
    CreateList.$inject = ['$log', 'MainLogic'];

    /**
     * The CreateList controller aims to manage the Application.
     * @name CreateList
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @function
     */
    function CreateList($log, MainLogic) {

        $log.debug('Loading CreateList Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.options =
            [
                {
                    title: 'Créer une liste',
                    links:
                        [
                            {
                                title: 'Simple',
                                link: '#/simpleList',
                                icon: 'glyphicon-th-list',
                                style: 'btn-primary no-uppercase'
                            },

                            {
                                title: 'Vote',
                                link: '#/voteList',
                                icon: 'glyphicon-star-empty',
                                style: 'btn-primary no-uppercase'
                            },

                            {
                                title: 'Levée de fond',
                                link: '#/fundList',
                                icon: 'glyphicon-euro',
                                style: 'btn-primary no-uppercase'
                            }
                        ]
                }
            ];

        return vm;

    }

})();
