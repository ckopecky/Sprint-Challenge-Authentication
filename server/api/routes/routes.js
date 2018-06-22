const { authenticate } = require('../utils/middlewares');

const { getAllJokes, createUser, login } = require('../controllers');

const getCheck = (req, res) => {
  res.send({ api: 'whooo hoo, it works!' });
};

module.exports = server => {
  server.get('/', getCheck)
  server.get('/api/jokes', authenticate, getAllJokes);
  server.route('/api/users').post(createUser);
  server.route('/api/login').post(login);
};
