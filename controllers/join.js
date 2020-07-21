const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path'); // Not used yet
// Setup knex
// const knexfile = require('../knexfile').development; // Not used yet
// const knex = require('knex')(knexfile);

app.engine('hbs', handlebars({
  layoutsDir: path.join(__dirname, '/views/layouts'),
  extname: 'hbs'
}));

module.exports = {
  index: async (req, res) => {
    // Read every row data in from aboutCardContentFiller
    try {
      res.render('join');
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};