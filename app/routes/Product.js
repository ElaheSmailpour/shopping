
const express = require('express')
const router = express.Router()

const {getProduct,postProduct}=require("../controller/ProductController")

router.get("/",getProduct)

router.post("/",postProduct)

module.exports=router