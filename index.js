#! /usr/bin/env node

var express = require('express'),
    app = express();
app.set('port', 9000);
app.get('/', function (req, res) {
    var Promise = require('bluebird')
    var adb = require('adbkit')
    var client = adb.createClient()

    client.listDevices()
        .then(function (devices) {
            res.send(devices);
        })
        .catch(function (err) {
            console.log(err);
            res.send(err);
        })
});
app.listen(app.get('port'), function () {
    console.log('http://127.0.0.1:9000/');
});
