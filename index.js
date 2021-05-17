
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

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(multer({dest: 'uploads'}).single('bild'))
app.use(express.static("uploads"))
app.use(cors());

app.use("/api",userRoute)
app.use("/product",ProductRouter)
app.use("/category",categoryRouter)


app.get('*', (req,res, next) =>{
    res.status(404).send("Diesen Pfad gibt es nicht")
   
    
  })
  
 
  
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("Läuft auf Port" + port) })

"/api/signup"