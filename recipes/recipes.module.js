const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('ingredient_recipes as ir')
    .join('ingredients', 'ingredients.id', 'ir.ingredient_id')
    .select('ingredients.name', 'ir.quantity')
    .where({recipe_id})
}

function getInstructions(id){
    return db('recipes')
    .where({ id })
    .select('recipes.step_name')
    .first()
}