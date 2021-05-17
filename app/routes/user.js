
const express = require('express')
const router = express.Router()

const {login,signup,getsignup,googleaccount}=require("../controller/userController")

router.post("/login",login)
router.get("/signup",getsignup)
router.post("/signup",signup)
router.post("/auth/google",googleaccount)


module.exports=router