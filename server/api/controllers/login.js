const bcrypt = require('bcrypt');
//users model
const Users = require('../models/userModels');


const login = (req, res) => {
  const { username, password } = req.body;

  Users.findBy({username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user.username;
        console.log(req.session.cookie);
        res.status(200).json({message: `Welcome ${user.username}! Have a cookie *nom nom nom*`});
      }
      else {
        res.status(401).json({message: 'Invalid Credentials'});
      }
    })
    .catch(err => {
      res.status(500).json({Error: err.message});
    })


}

module.exports = {
  login
};
