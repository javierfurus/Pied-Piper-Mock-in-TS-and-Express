const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const path = require('path');
// Setup knex
const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);

app.engine('hbs', handlebars({
  layoutsDir: path.join(__dirname, '/views/layouts'),
  extname: 'hbs'
}));

module.exports = {
  index: async (req, res) => {
  // Read every row data in from cardContentFiller
    try {
      const rows = await knex.from('cardContentFiller').select('*');
      console.log('Data acquired successfully!');
      // Render index and use rows from cardContentFiller
      res.render('index', { cardsContent: rows });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

};
