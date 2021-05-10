
const express = require('express')
const router = express.Router()

const { getcategory, postcategory, deletecategory } = require("../controller/category")

router.get("/", getcategory)

router.post("/", postcategory)

router
    .route('/:_id')

    .delete(deletecategory);
module.exports = router