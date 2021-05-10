
const express = require('express')
const router = express.Router()

const {getProduct,addProduct}=require("../controller/ProductController")

router.get("/",getProduct)

router.post("/",addProduct)

module.exports=router