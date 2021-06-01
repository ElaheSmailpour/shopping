
const express = require('express')
const router = express.Router()

const { getcategory, postcategory, deletecategory,getSearch } = require("../controller/category")

router.get("/", getcategory)
router.get("/:_id", getSearch)
router.post("/", postcategory)

router
    .route('/:_id')

    .delete(deletecategory);
module.exports = router