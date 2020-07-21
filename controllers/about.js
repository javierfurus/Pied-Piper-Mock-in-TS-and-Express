
const knexfile = require('../knexfile').development;
const knex = require('knex')(knexfile);

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
