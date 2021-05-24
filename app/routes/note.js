const auth=require("../middelware/Auth")
const express = require('express')
const router = express.Router()

const { getnote } = require("../controller/notecontroller")

router.get("/",auth,getnote)

//router.post("/",auth, postnote)

module.exports = router