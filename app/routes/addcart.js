const auth=require("../middelware/Auth")
const express = require('express')
const router = express.Router()


    const { addcart,getcart,removeselectcount,addcartinNote} = require("../controller/addcartcontroller")

router.post("/",auth,addcart)
router.post("/addcartinNote",auth,addcartinNote)
router.get("/",auth,getcart)
router.delete("/:id",auth,removeselectcount)


module.exports = router