
exports.up = function (knex) {
  knex.schema.createTable('aboutCardContentFiller', (table) => {
    table.increments('id');
    table.string('bookmark');
    table.string('img');
    table.string('name');
    table.string('title');
    table.string('text', 1000); // Long text is heavier
  }).then(() => console.log('table created'))
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
      knex.destroy();
    });
};

exports.down = function (knex) {
  knex.schema.dropTable('aboutCardContentFiller');
};
    