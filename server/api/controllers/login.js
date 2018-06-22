const jwt = require('jsonwebtoken');
const { mysecret } = require('../../config');
const User = require('../models/userModels');

const generateToken = (user) => {
  const options = {
    expiresIn: "1h",
  };
  const payload = {
    username: user.username
  }; // what will determine our payload.
  return jwt.sign(payload, mysecret, options); // creates our JWT with a secret and a payload and a hash.
}

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res.status(403).json({ error: 'Invalid Username/Password' });
      return;
    }
    else if (user === null) {
      res.status(422).json({ error: 'No user with that username in our DB' });
      return;
    } else{
      user.validatePassword(password)
        // This is an example of using our User.method from our model.
        .then(hashMatch => {
          if (hashMatch) {
            const token = generateToken(user);
            return res.json({ message: `Hello, ${user.username}`, token }); // sends the token back to the client
          }
          else {
            res.status(422).json({ error: 'passwords dont match' });
            return;
          }
        })
        .catch(err => {
          res.status(500).json({Error: err.message});
        });
    }
    
  });
};

module.exports = {
  login
};
