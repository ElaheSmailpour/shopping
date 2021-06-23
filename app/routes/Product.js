
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const express = require('express')
const router = express.Router()

const {getProduct,addProduct,deleteproduct,selectproduct,productdetails,addProductmultiImage}=require("../controller/ProductController")

router.get("/",getProduct)


router.route('/:cat')
.get(selectproduct)
 
router.route('/details/:_id')
.get(productdetails)
 
var cpUpload = upload.fields([{ name: 'image', maxCount: 5 }, { name: 'video', maxCount: 1 }])
router.post("/multiImage", cpUpload,addProductmultiImage)
//router.post("/multiImage", upload.array('image', 5),addProductmultiImage)
router.post("/", upload.single('image'),addProduct)

router
  .route('/:_id')
      
      .delete(deleteproduct);

module.exports=router