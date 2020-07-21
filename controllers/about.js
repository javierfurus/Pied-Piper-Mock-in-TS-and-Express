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
    // Read every row data in from aboutCardContentFiller
    try {
      const rows = await knex.from('aboutCardContentFiller').select('*');
      console.log('Data acquired successfully!');
      // Render about and use rows from aboutCardContentFiller
      res.render('about', { cardsContent: rows });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
};
