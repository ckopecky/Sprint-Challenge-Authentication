const bcrypt = require('bcrypt');
const Users = require('../models/userModels');

const register = (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(err => {
      res.status(500).json(err.message);
    })

}

module.exports = {
  register
};
