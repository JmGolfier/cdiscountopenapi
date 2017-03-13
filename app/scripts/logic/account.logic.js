/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The AccountLogic handler file.
 * @module AccountLogic
 */

/**
 * AccountLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('AccountLogic', AccountLogic);

    // Dependency injection
    AccountLogic.$inject = ['$log', 'MainLogic', 'Server', 'Crypto', 'StringService'];

    /**
     * The AccountLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} MainLogic The application's MainLogic object
     * @param {Object} Server The application's Server object
     * @param {Object} Crypto The application's Crypto object
     * @param {Object} StringService The application's StringService object
     * @return {Object} The factory
     * @function
     */
    function AccountLogic($log, MainLogic, Server, Crypto, StringService) {

        $log.debug('Loading Account Logic...');

        var factory =
        {

            update: update

        };

        return factory;

        /**
         * Update user data.
         * @name update
         * @param {Object} viewModel The Account controller
         * @function
         */
        function update(viewModel) {

            /* jshint ignore:start */

            if (StringService.isValid(viewModel.password) && viewModel.password.length >= 6) {

                if (
                    StringService.isValid(
                        [
                            viewModel.old_password,
                            viewModel.confirm_password,
                            viewModel.password
                        ]
                    )
                ) {

                    if(StringService.isValid(viewModel.user.email)) {

                        viewModel.user.newHash = Crypto.createHash(viewModel.user.email, viewModel.password);
                        viewModel.user.oldHash = Crypto.createHash(viewModel.user.email, viewModel.old_password);

                    } else {

                        viewModel.success = false;
                        viewModel.error = true;
                        viewModel.errorMessage =
                            'Pour changer de mot passe, veuillez saisir une adresse email valide.';

                        $('body').scrollTop(0);

                    }

                } else {

                    viewModel.success = false;
                    viewModel.error = true;
                    viewModel.errorMessage =
                        'Pour changer de mot passe, veuillez remplir tous les champs mot de passe.';

                    $('body').scrollTop(0);

                }

            } else {

                viewModel.success = false;
                viewModel.error = true;
                viewModel.errorMessage = 'Le mot de passe est incorrect. Il doit faire au minimum 6 caractères.';

                $('body').scrollTop(0);

            }

            if (
                StringService.isValid(
                    [
                        viewModel.user.firstname,
                        viewModel.user.lastname,
                        viewModel.user.email
                    ]
                )
            ) {

                var successCallback =
                    function (data) {

                        MainLogic.user = data;
                        viewModel.error = false;
                        viewModel.success = true;

                        $('body').scrollTop(0);

                    };

                var errorCallback =
                    function (data) {

                        viewModel.success = false;
                        viewModel.error = true;
                        viewModel.errorMessage = data.message;

                        $('body').scrollTop(0);

                    };

                Server.put('users/' + MainLogic.user._id, viewModel.user, successCallback, errorCallback);

            } else {

                viewModel.success = false;
                viewModel.error = true;
                viewModel.errorMessage = 'Certaines données sont manquantes ou erronées.';

                $('body').scrollTop(0);

            }

            /* jshint ignore:end */

        }

    }

})();
