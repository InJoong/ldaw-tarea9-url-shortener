
exports.up = function(knex) {
    return knex.schema
    .createTable('urls', (table) => {
      table.increments('id');
      table.string('original', 255).notNullable();
      table.string('token', 255).notNullable();
      table.integer('redirections').defaultTo(0);
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTable('urls');
};
