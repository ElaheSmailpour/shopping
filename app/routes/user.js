
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const express = require('express')

const router = express.Router()

const {login,getsignup,googleaccount,signupgoogle,deleteloginuser,signup}=require("../controller/userController")


router.post("/login",login)
router.get("/signup",getsignup)

router.post("/auth/google",googleaccount)
router.post("/signup",upload.single("image"),signup)
router.post("/signupgoogle1",signupgoogle)
router
    .route('/signup/:_id')

    .delete(deleteloginuser);

module.exports=router