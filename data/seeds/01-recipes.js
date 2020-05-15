
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          name: 'Palestinian Chicken',
          step_name: 'Kill a chicken. Use all the seasonings. Throw some bread at your oven. Something about chickpeas.'
        },
        {
          name: 'Orange Chicken',
          step_name: 'Kill a chicken. Use every of the oranges. RICE. IDK, eat or something.'
        },
        {
          name: 'Hot Pot',
          step_name: 'Go to a Hot Pot restaurant.'
        }
      ]);
    });
};
