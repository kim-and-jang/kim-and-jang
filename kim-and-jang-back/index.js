/** @format */

const express = require('express'); //express를 설치했기 때문에 가져올 수 있다.
const app = express();
const get_commit = require('./routes/get_commit_page');
const cors = require('cors');
app.use(cors());
app.get('/', (req, res) => {
    res.send('start project');
});
app.use('/commit', get_commit);

app.listen(5000);
