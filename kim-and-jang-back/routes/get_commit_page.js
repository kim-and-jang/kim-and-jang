/** @format */

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request');
var headers = {
    'PRIVATE-TOKEN': 'Ycz9FbDkyxsD5i-c2_TX',
};

var options = {
    url: 'http://192.168.158.12:9000/teespace/teespace-admin/-/commits/develop',
    headers: headers,
};

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

request(options, callback);