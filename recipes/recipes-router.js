const express = require('express')
const Recipes = require('./recipes.module')
const router = express.Router()

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(er => {
        res.status(500).json({error: er.message})
    })
})

module.exports = router