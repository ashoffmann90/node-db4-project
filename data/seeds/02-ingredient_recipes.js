
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_recipes').insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          ingredient_recipes: '42'
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          ingredient_recipes: '74'
        },
        {
          recipe_id: 1,
          ingredient_id: 3,
          ingredient_recipes: '64'
        },
        {
          recipe_id: 2,
          ingredient_id: 2,
          ingredient_recipes: '45'
        }
      ]);
    });
};
