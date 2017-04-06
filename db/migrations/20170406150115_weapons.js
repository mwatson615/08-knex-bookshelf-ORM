
exports.up = function(knex, Promise) {
  return knex.schema.createTable('weapons', (table) => {
  	table.increments();
  	table.string('weapon_name').notNullable();
  	table.string('weapon_type').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('weapons')
};
