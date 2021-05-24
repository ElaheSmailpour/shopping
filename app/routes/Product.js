
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const express = require('express')
const router = express.Router()

const {getProduct,addProduct,deleteproduct,selectproduct}=require("../controller/ProductController")

router.get("/",getProduct)


router.route('/:select')
.get(selectproduct)
 

router.post("/",upload.single("image"),addProduct)

router
  .route('/:_id')
      
      .delete(deleteproduct);

module.exports=router