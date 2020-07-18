
exports.up = function (knex) {
  knex.schema.createTable('cardContentFiller', (table) => {
    table.increments('id');
    table.string('img');
    table.string('name');
    table.string('title');
    table.string('text');
  }).then(() => console.log('table created'))
    .catch((err) => { console.log(err); throw err; })
    .finally(() => {
      knex.destroy();
    });
};

exports.down = function (knex) {
  knex.schema.dropTable('cardContentFiller');
};
