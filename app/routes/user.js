
const express = require('express')
const router = express.Router()

const {login,signup,getsignup,googleaccount,signupgoogle}=require("../controller/userController")

router.post("/login",login)
router.get("/signup",getsignup)
router.post("/signup",signup)
router.post("/auth/google",googleaccount)
router.post("/signupgoogle",signupgoogle)

module.exports=router