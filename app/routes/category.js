
const express = require('express')
const router = express.Router()

const {getcategory,postcategory}=require("../controller/category")

router.get("/",getcategory)

router.post("/",postcategory)

module.exports=router