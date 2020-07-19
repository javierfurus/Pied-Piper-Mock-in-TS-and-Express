exports.up = async (knex) => {
  try {
    return knex.schema.hasTable('aboutCardContentFiller', (exists) => {
      if (!exists) {
        knex.schema.createTable('aboutCardContentFiller', (table) => {
          table.increments('id');
          table.string('bookmark');
          table.string('img');
          table.string('name');
          table.string('title');
          table.string('text', 1000);
        });
      }
    });
  } catch (err) {
    console.log('Error:', err);
    throw err;
  } finally {
    console.log('Table created');
  }
};

exports.down = async (knex) => {
  await knex.schema.dropTable('aboutCardContentFiller');
};
