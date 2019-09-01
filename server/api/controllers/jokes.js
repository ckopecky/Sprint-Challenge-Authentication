const axios = require('axios');
const getAllJokes = (req, res) => {
  if (req.session) {
    req.header['Accept'] = 'application/json'
    axios.get('https://api.jokes.one/jod')
      .then(jokes => {
        res.status(200).json(jokes.data.contents.jokes[0]);
      })
      .catch(err => res.status(500).json({ error: 'Error Fetching Jokes', err: err.message }));
  } else {
    return res.status(422).json({ error: `Can't get these jokes!` });
  }
};

module.exports = {
  getAllJokes
};
