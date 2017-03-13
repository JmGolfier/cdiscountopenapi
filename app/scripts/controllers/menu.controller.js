/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The Menu controller's file.
 * @module Menu
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
        .controller('Menu', Menu);

    // Dependency injection
    Menu.$inject = ['$log', 'MainLogic'];

    /**
     * The Menu controller aims to manage the Application.
     * @name Menu
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The MainLogic object
     * @function
     */
    function Menu($log, MainLogic) {

        $log.debug('Loading Menu Controller...');

        var vm = this;

        if(!MainLogic.isLoggedIn()) {

            MainLogic.goToLogin();
            return vm;

        }

        vm.options =
        [
            {
                title: 'Gestion des listes',
                links:
                    [
                        {
                            title: 'Créer une liste',
                            //link: '#/createList',
                            link: '#/simpleList',
                            icon: 'glyphicon-th-list',
                            style: 'btn-primary no-uppercase'
                        },

                        {
                            title: 'Voir mes listes',
                            link: '#/viewLists',
                            icon: 'glyphicon-eye-open',
                            style: 'btn-primary no-uppercase'
                        },

                        {
                            title: 'Voir mes listes partagées',
                            link: '#/viewSharedLists',
                            icon: 'glyphicon-eye-open',
                            style: 'btn-primary no-uppercase'
                        },

                        {
                            title: 'Chercher une liste',
                            link: '#/getList',
                            icon: 'glyphicon-search',
                            style: 'btn-primary no-uppercase'
                        }
                    ]
            },

            {
                title: 'Gestion du compte',
                links:
                    [
                        {
                            title: 'Mes amis',
                            link: '#/friendsList',
                            icon: 'glyphicon-hand-right',
                            style: 'btn-primary no-uppercase'
                        },

                        {
                            title: 'Mon compte',
                            link: '#/account',
                            icon: 'glyphicon-user',
                            style: 'btn-primary no-uppercase'
                        },

                        {
                            title: 'Déconnexion',
                            link: '#/logout',
                            icon: 'glyphicon-lock',
                            style: 'btn-danger no-uppercase'
                        }
                    ]
            }
        ];

        return vm;

    }

})();
