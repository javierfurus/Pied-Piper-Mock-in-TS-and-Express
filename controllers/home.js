const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);

module.exports = {
  index: async (req, res) => {
  // Read every row data in from cardContentFiller
    try {
      const rows = await knex.from('cardContentFiller').select('*');
      console.log('Data acquired successfully!');
      // Render index and use rows from cardContentFiller
      res.render('home', { cardsContent: rows });
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

};
