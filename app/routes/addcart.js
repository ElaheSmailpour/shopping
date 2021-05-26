const auth=require("../middelware/Auth")
const express = require('express')
const router = express.Router()

const { addcart,getcart } = require("../controller/addcartcontroller")

router.post("/",auth,addcart)
router.get("/",auth,getcart)



module.exports = router