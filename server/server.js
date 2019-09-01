const express = require('express');
const session = require('express-session');
const knexStore = require('connect-session-knex')(session);
const cors = require('cors');
const routes = require('./api/routes/routes');
const bodyParser = require('body-parser');

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};

const sessionOptions = {
  name: 'cmvnk',
  secret: 'cmvnklovescookies',
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
  },
  resave: false,
  saveUninitialized: false,
  store: new knexStore({
    knex: require('../database/dbConfig'),
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60
  })
}

const server = express();

server.use(bodyParser.json());
server.use(express.json());
server.use(cors(corsOptions));
server.use(session(sessionOptions));
server.use('/', routes);

module.exports = server;

