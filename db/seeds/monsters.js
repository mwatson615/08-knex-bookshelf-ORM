
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('monsters').del()
    .then(function () {
      // Inserts seed entries
      return knex('monsters').insert([
        {monster_name: 'Frank Stein', evil_power: 'Tall Shoes', number_of_arms: 2, weapon: 'mumbling'},
        {monster_name: 'Donald Drumpf', evil_power: 'Bigliness', number_of_arms: 4, weapon: 'ignorance'},
        {monster_name: 'Scary Thing', evil_power: 'Eeevil', number_of_arms: 593, weapon: 'feather duster'}
      ]);
    });
};
