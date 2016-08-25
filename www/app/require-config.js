/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */


var load = function () {
    require.config({
        baseUrl: "app/",
        paths: {
            'text': './lib/text/text',
            'dom7': './lib/dom7/dom7',
            'app': './bootstrap',
        },
        deps: [
            'lib/f7/welcomescreen',
        ]
    });


    require(['app'], function (app) {});
};


if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
    document.addEventListener("deviceready", load, false);
} else {
    load();
}



