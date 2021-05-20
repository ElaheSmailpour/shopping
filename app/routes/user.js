
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })
const express = require('express')

const router = express.Router()

const {login,getsignup,googleaccount,signupgoogle,deleteloginuser,signupgoogle1}=require("../controller/userController")


router.post("/login",login)
router.get("/signup",getsignup)

router.post("/auth/google",googleaccount)
router.post("/signupgoogle",upload.single("image"),signupgoogle)
router.post("/signupgoogle1",signupgoogle1)
router
    .route('/signup/:_id')

    .delete(deleteloginuser);

module.exports=router