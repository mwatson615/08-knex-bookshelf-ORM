
exports.up = function(knex, Promise) {
  return knex.schema.createTable('monsters', (table) => {
  	table.increments();
  	table.string('monster_name').notNullable();
  	table.string('evil_power').notNullable();
  	table.integer('number_of_arms').notNullable();
  	table.string('monster_weapon').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('monsters')
};
