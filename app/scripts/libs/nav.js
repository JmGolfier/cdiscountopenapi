/* jshint ignore:start */
(function () {

    'use strict';

    var body = document.body,
        mask = document.createElement('div'),
        togglePushLeft = document.querySelector('.toggle-push-left'),
        activeNav = null,
        opened = false;

    function close() {
        classie.remove(body, activeNav);
        activeNav = '';
        mask.style.opacity = 0;
        mask.style.display = 'none';
    }

    mask.className = 'mask';
    document.body.appendChild(mask);

    togglePushLeft.addEventListener('click',
        function () {

            opened = !opened;

            if (opened) {

                mask.style.display = 'initial';
                classie.add(body, 'pml-open');
                activeNav = 'pml-open';
                mask.style.opacity = 1;

            } else {

                close();

            }

        }
    );

    mask.addEventListener('click',
        function () {

            opened = !opened;
            close();

        }
    );

})();
/* jshint ignore:end */