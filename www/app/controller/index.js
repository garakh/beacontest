define(['dom7'], function ($$) {
    'use strict';

    function status(msg) {
        $$('#status').html(msg);
    }

    function uint8ArrayToString(uint8Array)
    {
        function format(x)
        {
            var hex = x.toString(16);
            return hex.length < 2 ? '0' + hex : hex;
        }
        var result = '';
        for (var i = 0; i < uint8Array.length; ++i)
        {
            result += format(uint8Array[i]) + ' ';
        }
        return result;
    }

    function log(msg) {
        $$('#log').append('<li>' + msg + '</li>');
    }

    function htmlBeaconName(beacon) {
        var name = beacon.name || 'no name';
        return '<strong>' + name + '</strong><br/>';
    }
    function htmlBeaconURL(beacon) {
        return beacon.url ?
                'URL: ' + beacon.url + '<br/>' : '';
    }
    function htmlBeaconNID(beacon) {
        return beacon.nid ?
                'NID: ' + uint8ArrayToString(beacon.nid) + '<br/>' : '';
    }
    function htmlBeaconBID(beacon) {
        return beacon.bid ?
                'BID: ' + uint8ArrayToString(beacon.bid) + '<br/>' : '';
    }
    function htmlBeaconVoltage(beacon) {
        return beacon.voltage ?
                'Voltage: ' + beacon.voltage + '<br/>' : '';
    }
    function htmlBeaconTemperature(beacon) {
        return beacon.temperature && beacon.temperature != 0x8000 ?
                'Temperature: ' + beacon.temperature + '<br/>' : '';
    }
    function htmlBeaconRSSI(beacon) {
        return beacon.rssi ?
                'RSSI: ' + beacon.rssi + '<br/>' : '';
    }

    function htmlMac(beacon) {
        return beacon.address ?
                'Address: ' + beacon.address + '<br/>' : '';
    }	
	
    function htmlIBeacon(beacon) {
        return beacon.ibeacon ?
                'IBeacon UUID: ' + beacon.ibeacon + '<br/>' : '';
    }		

    $$(document).on('click', '#scanEddy', function () {

        evothings.eddystone.stopScan();

        status('Scanning...');

        evothings.eddystone.startScan(
                function (beacon)
                {
                    var htmlBeacon = htmlBeaconName(beacon)
                            + htmlBeaconURL(beacon)
                            + htmlMac(beacon)
                            + htmlIBeacon(beacon)
                            + htmlBeaconNID(beacon)
                            + htmlBeaconBID(beacon)
                            + htmlBeaconVoltage(beacon)
                            + htmlBeaconTemperature(beacon)
                            + htmlBeaconRSSI(beacon);

                    log(htmlBeacon);
                },
                function (error)
                {
                    status('Eddystone scan error: ' + error);
                });

        return false;
    });


    return {
        'init': function (page) {

        }
    };
});