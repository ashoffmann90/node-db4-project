
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: 'pepper?'
        },
        {
          name: 'definitely salt'
        },
        {
          name: "dragon's breath hot pepper"
        },
        {
          name: 'pepper x hot pepper'
        },
        {
          name: 'wimpy ghost pepper'
        },
        {
          name: 'some people actually think ketchup is spicy.'
        }
      ]);
    });
};
