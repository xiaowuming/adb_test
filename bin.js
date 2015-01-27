#! /usr/bin/env node
var Service = require('node-mac').Service,
    path = require('path');
var svc = new Service({
    name: 'adb_test',
    description: 'adb_test',
    script: path.join(__dirname, './index.js'),
    env: [
        {
            name: "PATH",
            value: process.env["PATH"]
        }
    ]
});
svc.on('install', function () {
    svc.start();
});

svc.install();