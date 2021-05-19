
require("dotenv").config();
const multer=require("multer")
var express = require('express');
var path = require('path');
const app = express();
const cors = require("cors")
const userRoute=require("./app/routes/user")
const ProductRouter=require("./app/routes/Product")
const categoryRouter=require("./app/routes/category")


const verbindeDB = require("./mongo-db");

verbindeDB()


app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

//for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, './uploads');
  },
  filename: function (req, file, cb) {
      cb(null, Date.now() + "--" + file.originalname);
  }
});  

const fileFilter = (req, file, cb) => {
  if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
      cb(null, true);
  } else{
      cb(null, false);

  }

};

//let upload = multer({ storage: storage, fileFilter: fileFilter,});


app.use(multer({dest: 'uploads/'}).single('image'))
app.use(express.static('uploads'))


app.use("/api",userRoute)
app.use("/product",ProductRouter)
app.use("/category",categoryRouter)


app.get('*', (req,res, next) =>{
    res.status(404).send("Diesen Pfad gibt es nicht")
   
    
  })
  
 
  
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("Läuft auf Port" + port) })

"/api/signup"