const { getAllJokes } = require('./jokes');
const { login } = require('./login');
const { register } = require('./user');
const { logout } = require('./logout');

module.exports = {
  getAllJokes,
  login,
  logout,
  register
};
