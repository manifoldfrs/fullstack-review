const express = require('express');
const helpers = require('../helpers/github.js');
const db = require('../database/index.js');
const parse = require('body-parser');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(parse.text());

app.post('/repos', function (req, res) {
  helpers.getReposByUsername(req.body, (repos) => {
    repos.forEach(db.save);
  });
  res.status(201).send('Repos successfully saved');
});

app.get('/repos', function (req, res) {
  res.status(200);
  db.findTop25Repos(res.send.bind(res));
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

