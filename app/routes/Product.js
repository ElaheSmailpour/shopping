
const express = require('express')
const router = express.Router()

const {ProductController,postProduct}=require("../controller/ProductController")

router.get("/",ProductController)

router.post("/",postProduct)

module.exports=router