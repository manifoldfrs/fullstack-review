const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request(options, (err, response, body) => {
    if (err) {
      console.log('Error:', err);
    } else {
      let repos = JSON.parse(body);
      console.log('See repo', repos);
      callback(repos);
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;