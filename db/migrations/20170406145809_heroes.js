
exports.up = function(knex, Promise) {
  return knex.schema.createTable('heroes', (table) => {
  	table.increments();
  	table.string('hero_name').notNullable();
  	table.string('super_power').notNullable();
  	table.integer('number_of_arms').notNullable();
  	table.string('weapon').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('heroes')
};
