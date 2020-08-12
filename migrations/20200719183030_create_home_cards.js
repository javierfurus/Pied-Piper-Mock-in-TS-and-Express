exports.up = async (knex) => {
  const hasTable = await knex.schema.hasTable('cardContentFiller');
  if (!hasTable) {
    console.log('Table does not exist yet');
    try {
      await knex.schema.createTable('cardContentFiller', (table) => {
        console.log('Creating table');
        table.increments('id');
        table.string('img');
        table.string('name');
        table.string('title');
        table.string('text');
      });
    } catch (err) {
      console.log('Error:', err);
      throw err;
    } finally {
      console.log('Table created');
    }
  } else {
    console.log('Table already exists!');
  }
};

exports.down = async (knex) => {
  await knex.schema.dropTable('cardContentFiller');
};
