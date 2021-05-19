const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,

    artikelnummer:
    {
        type: Number,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"

    },
    
    image: String,
    inventory:Number
})

const model = mongoose.model("product1", productSchema)
module.exports = model