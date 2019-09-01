const router = require('express').Router();
const { getAllJokes, register, login, logout } = require('../controllers');
const authenticate = require('../utils/middlewares');
const getCheck = (req, res) => {
  res.send({ api: 'whooo hoo, it works!' });
};

router.route('/')
  .get(getCheck)
router.route('/api/users')
  .post(register);
router.route('/api/login')
  .post(login);
router.route('/api/logout')
  .delete(logout);
router.route('/api/jokes')
  .all(authenticate)
  .get(getAllJokes);




module.exports = router;
