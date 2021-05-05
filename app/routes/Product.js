
const express = require('express')
const router = express.Router()

const {ProductController}=require("../controller/ProductController")

router.get("/",ProductController)



module.exports=router