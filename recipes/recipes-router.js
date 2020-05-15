const express = require('express')
const Recipes = require('./recipes.module')
const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(er => {
        res.status(500).json({error: er.message})
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const id = req.params.id
    Recipes.getShoppingList(id)
    .then(recipe => {
        res.json(recipe)
    })
    .catch(er => {
        res.status(500).json({error: "Could not get shopping list"})
    })
})

router.get('/:id/steps', (req, res) => {
    const id  = req.params.id
    Recipes.getInstructions(id)
    .then(steps => {
        res.json(steps)
    })
    .catch(er => {
        res.status(500).json({ error: "Could not get steps"})
    })
})

module.exports = router