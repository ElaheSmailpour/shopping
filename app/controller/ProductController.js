
require("dotenv").config();
const mongoose=require("mongoose");
var express = require('express');
var path = require('path');

const app = express();
const loginRouter = require('../routes/');

const verbindeDB = require("./mongo-db");


verbindeDB()

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/login",signupRouter)



app.get('*', (req,res, next) =>{
    res.status(404).send("Diesen Pfad gibt es nicht")
   
    
  })
  
 
  
const port = process.env.PORT || 5000;

app.listen(port, () => { console.log("Läuft auf Port" + port) })

