
const express = require('express')

const router = express.Router()

const {login,signup,getsignup,googleaccount,signupgoogle,deleteloginuser}=require("../controller/userController")


router.post("/login",login)
router.get("/signup",getsignup)
router.post("/signup",signup)
router.post("/auth/google",googleaccount)
router.post("/signupgoogle",signupgoogle)
router
    .route('/signup/:_id')

    .delete(deleteloginuser);

module.exports=router