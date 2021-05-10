
const mongoose = require("mongoose");


let addressString = process.env.mongo || "mongodb://localhost:27017/local";
let optionen = { useNewUrlParser: true, useUnifiedTopology: true };

const verbindeDB = () => {

    
    mongoose.connect(addressString, optionen).then( (mongooseModul) => {
        console.log("connected..");
     

    } ).catch( (error) => {
        console.error(" MongoDB error: "+error);
    } );

}

module.exports = verbindeDB;