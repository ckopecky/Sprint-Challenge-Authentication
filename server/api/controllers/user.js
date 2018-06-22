const User = require('../models/userModels');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { mysecret } = require("../../config");

const generateToken = (user) => {
  const options = {
    expiresIn: "1h",
  };
  const payload = {
    username: user.username
  }; // what will determine our payload.
  return jwt.sign(payload, mysecret, options); // creates our JWT with a secret and a payload and a hash.
}

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  User
    .create({username, password})
    .then(user => {
      if(user.username){
        const token = generateToken(user);
        res.status(201).json({user: user.username, token});
      }
      else{
        res.status(422).json({Error:err.message})
      }
    })
    .catch(err => {
      res.status(500).json({Error: err.message});
    });
};

module.exports = {
  createUser
};
