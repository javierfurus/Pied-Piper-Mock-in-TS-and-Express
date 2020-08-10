exports.up = async (knex) => {
  const hasTable = await knex.schema.hasTable('aboutCardContentFiller');
  if (!hasTable) {
    console.log('Table does not exist yet');
    try {
      await knex.schema.createTable('aboutCardContentFiller', (table) => {
        console.log('Creating table');
        table.increments('id');
        table.string('bookmark');
        table.string('img');
        table.string('name');
        table.string('title');
        table.string('text', 1000); // Long text is heavier
      });
    } catch (err) {
      console.log('Error:', err);
      throw err;
    } finally {
      console.log('Database created');
    }
  } else {
    console.log('Table already exists!');
  }
};

exports.down = async (knex) => {
  await knex.schema.dropTable('aboutCardContentFiller');
};
