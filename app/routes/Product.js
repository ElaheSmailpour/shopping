
const express = require('express')
const router = express.Router()

const {getProduct,addProduct,deleteproduct}=require("../controller/ProductController")

router.get("/",getProduct)

router.post("/",addProduct)
router
  .route('/:_id')
      
      .delete(deleteproduct);

module.exports=router