const express = require('express');
const about = require('./about');
const index = require('./index');
const join = require('./join');
const router = express.Router({ mergeParams: true });
const routes = [
  {
    path: '/index',
    router: index
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
