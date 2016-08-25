define(function () {
    'use strict';

    function load(page) {
        require(['app/controller/' + page.name + '.js'], function (controller) {
            controller.init(page);
        });
    }

    return {
        beforeInit: function (app, page) {
            if (page.fromPage)
                return;

            load(page);
        },
        afterAnimation: function (app, page) {
            load(page);
        }
    };
});