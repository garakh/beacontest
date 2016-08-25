define(function () {
    'use strict';

    return {
        'mobile': (window.device ? true : false),
        'platform':  (window.device ? window.device.platform : 'browser'),
    };
    
    
});