const express = require('express');
let app = express();
const helpers = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function (req, res) {
  let repoTest = helpers.getReposByUsername('fhabib229', (repo) => {
    console.log(repo);
  });
  console.log(repoTest);
  console.log('test', req.body);
});

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

