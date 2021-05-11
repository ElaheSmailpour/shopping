
const express = require('express')
const router = express.Router()

const {login,signup,getsignup}=require("../controller/userController")

router.post("/login",login)
router.get("/signup",getsignup)
router.post("/signup",signup)


module.exports=router