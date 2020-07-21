const express = require('express');
const about = require('./about');
const home = require('./home');
const join = require('./join');
const router = express.Router({ mergeParams: true });
const routes = [
  {
    path: '/home',
    router: home
  },
  {
    path: '/about',
    router: about
  },
  {
    path: '/join',
    router: join
  }
];
routes.forEach(r => router.use(r.path, r.router));
module.exports = router;
