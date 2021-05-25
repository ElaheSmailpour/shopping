const auth=require("../middelware/Auth")
const express = require('express')
const router = express.Router()

const { getnote,creatnote,removenote } = require("../controller/notecontroller")

router.get("/",auth,getnote)

router.get("/:productid",auth, creatnote)
router.delete("/:id",auth, removenote)


module.exports = router