const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

// db.on('error', console.error.bind(console, 'Connection error.'));
// db.once('open', function() {
//   console.log('Successfully Connected!');
// })

let repoSchema = mongoose.Schema({
  id: Number,
  name: String,
  full_name: String,
  owner: String,
  html_url: String,
  description: String,
  avatar_url: String,
  stargazers_count: Number,
  forks_count: Number,
  created_at: String,
  updated_at: String,
  pushed_at: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repo) => {
  let doc = new Repo ({
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    owner: repo.owner.login,
    html_url: repo.html_url,
    description: repo.description,
    avatar_url: repo.avatar_url,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    created_at:repo.created_at,
    updated_at: repo.updated_at,
    pushed_at: repo.pushed_at
  });
  doc.save((err) => {
    if (err) {
      console.log(err);
    }
  });
};

let findTop25Repos = (callback) => {
  Repo.find((err, repos) => {
    if (err) {
      console.log('Error here:', err);
    } else {
      console.log('REPOS HERE', repos);
      callback(repos);
    }
  }).sort('-stargazers_count').limit(25);
};

module.exports.save = save;
module.exports.findTop25Repos = findTop25Repos;