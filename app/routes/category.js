
const express = require('express')
const router = express.Router()

const {postcategory}=require("../controller/category")

router.post("/",postcategory)

module.exports=router