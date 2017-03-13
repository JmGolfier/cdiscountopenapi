/**
 * @author Yohan RODRIGUEZ
 * @author Jean Mathieu GOLFIER
 * @author Raphaël MARQUES
 *
 * @file The MainLogic handler file.
 * @module MainLogic
 */

/**
 * MainLogic IIFE declaration.
 * @name IIFE
 * @function
 */
(function () {

    'use strict';

    // Module declaration
    angular
        .module('chift')
        .service('MainLogic', MainLogic);

    // Dependency injection
    MainLogic.$inject = ['$log', '$location', 'Server', 'Crypto', 'StringService'];

    /**
     * The MainLogic manage the AddPlayer controller.
     * @name Server
     * @param {Object} $log The AngularJS's $log object
     * @param {Object} $location The AngularJS's $location object
     * @param {Object} Server The application's Server object
     * @param {Object} Crypto The application's Crypto object
     * @param {Object} StringService The application's StringService object
     * @return {Object} The factory
     * @function
     */
    function MainLogic($log, $location, Server, Crypto, StringService) {

        $log.debug('Loading Main Logic...');

        var factory =
        {

            user: null,
            loggedIn: false,

            login: login,
            logout: logout,
            goHome: goHome,
            goSignUp: goSignUp,
            goToMenu: goToMenu,
            goToLogin: goToLogin,
            isLoggedIn: isLoggedIn,
            simpleLogout: simpleLogout,
            isSignUpPage: isSignUpPage,
            isLSAvailable: isLSAvailable,
            checkExistingUser: checkExistingUser

        };

        return factory;

        /**
         * checkExistingUser
         * @name checkExistingUser
         * @function
         */
        function checkExistingUser() {

            if (existUser()) {

                factory.user = getUser();
                console.log(factory.user);
                factory.loggedIn = true;

            }

        }

        /**
         * Verify if the current page is the signup one.
         * @name isSignUpPage
         * @return {Boolean} The fact that the current page is the signup one
         * @function
         */
        function isSignUpPage() {

            return $location.path() === '/signup';

        }

        /**
         * Redirect to signup page.
         * @name goSignUp
         * @function
         */
        function goSignUp() {

            $location.path('/signup');
            showOrHideMenu();

        }

        /**
         * Redirect to login page.
         * @name goToLogin
         * @function
         */
        function goToLogin() {

            $location.path('/');

        }

        /**
         * Log the user out.
         * @name logout
         * @function
         */
        function logout() {

            showOrHideMenu();

            simpleLogout();

        }

        /**
         * Log the user out.
         * @name simpleLogout
         * @function
         */
        function simpleLogout() {

            removeUser();

            factory.user = null;
            factory.loggedIn = false;

            goToLogin();

        }

        /**
         * Redirect to home.
         * @name goHome
         * @function
         */
        function goHome() {

            $location.path('/menu');
            showOrHideMenu();

        }

        /**
         * Log the user in.
         * @name login
         * @param {Object} viewModel The Main controller
         * @function
         */
        function login(viewModel) {

            if (
                StringService.isValid(
                    [
                        viewModel.username,
                        viewModel.password
                    ]
                )
            ) {

                var hash = Crypto.createHash(viewModel.username, viewModel.password);

                var successCallback =
                    function (data) {

                        if (viewModel.rememberMe) {

                            rememberUser(data);

                        }

                        factory.user = data;
                        factory.loggedIn = true;

                        goToMenu();

                    };

                var errorCallback =
                    function (data, status) {

                        console.log('ERROR LOGIN:', data, status);
                        viewModel.error = true;

                        if (data === null || status === 0 || status >= 500) {

                            viewModel.errorMessage = 'The server is currently unavailable ' +
                            '(because it is overloaded or down for maintenance). Generally, this is a temporary state.';
                            return;

                        }

                        viewModel.errorMessage = data.error;

                    };

                Server.post('login', {email: viewModel.username, hash: hash}, successCallback, errorCallback);

            } else {

                viewModel.error = true;
                viewModel.errorMessage = 'Certaines données sont manquantes ou erronées.';

            }

        }

        /**
         * Handle the user login.
         * @name isLoggedIn
         * @function
         */
        function isLoggedIn() {

            return factory.loggedIn;

        }

        /**
         * Redirect to menu page.
         * @name goToMenu
         * @function
         */
        function goToMenu() {

            $location.path('/menu');

        }

        /**
         * Show or hide the menu.
         * @name showOrHideMenu
         * @function
         */
        function showOrHideMenu() {

            var event = null,
                element = document.querySelector('.toggle-push-left');

            if (document.createEvent) {
                event = document.createEvent('HTMLEvents');
                event.initEvent('click', true, true);
            } else {
                event = document.createEventObject();
                event.eventType = 'click';
            }

            event.eventName = 'click';

            if (document.createEvent) {

                element.dispatchEvent(event);

            } else {

                element.fireEvent('on' + event.eventType, event);

            }

        }

        /**
         * rememberUser.
         * @name rememberUser
         * @function
         */
        function rememberUser(data) {

            if (isLSAvailable()) {

                localStorage.setItem('user', JSON.stringify(data));

            }

        }

        function isLSAvailable() {

            return localStorage !== null && localStorage !== undefined;

        }

        /**
         * existUser.
         * @name existUser
         * @function
         */
        function existUser() {

            if (isLSAvailable()) {

                var user = localStorage.getItem('user');
                return user !== null && user !== undefined && user.trim() !== '';

            }

            return false;

        }

        /**
         * removeUser.
         * @name removeUser
         * @function
         */
        function removeUser() {

            if (isLSAvailable()) {

                localStorage.removeItem('user');

            }

        }

        /**
         * getUser.
         * @name getUser
         * @function
         */
        function getUser() {

            if (isLSAvailable()) {

                return JSON.parse(localStorage.getItem('user'));

            }

        }

    }

})();
