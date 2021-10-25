/** @format */

var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');
var headers = {
    'PRIVATE-TOKEN': 'Ycz9FbDkyxsD5i-c2_TX',
};

var options = {
    url: 'http://192.168.158.12:9000/teespace/teespace-admin/-/commits/develop',
    headers: headers,
};

router.get('/', (req, res) => {
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            let $ = cheerio.load(body);
            let commitArr = [];
            $('.commit-detail').map(function (idx, data) {
                let commitMsg = $(data).find('.item-title').text();
                let author = $(data).find('.commit-author-link').text();
                let newData = {
                    commitMsg,
                    author,
                };
                if (!commitMsg.includes('Merge')) commitArr.push(newData);
            });
            res.send(commitArr);
        }
    });
});
module.exports = router;
