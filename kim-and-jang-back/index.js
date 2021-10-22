/** @format */

const express = require('express'); //express를 설치했기 때문에 가져올 수 있다.
const app = express();
var request = require('request');
var cheerio = require('cheerio');
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

app.get('/', (req, res) => {
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

app.listen(5000);
