
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    gender: {
        type: String,
        enum: ["Male", "Female","Other"],
        default: "Male"

    },
    image:String,
    notes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "product1"
    }]
    
})
const model = mongoose.model("user", userSchema)

module.exports = model


