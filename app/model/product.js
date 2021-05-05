const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    articlenumber:
    {
        type: Number,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category"
       
    },
    image: String
})

const model = mongoose.model("product", productSchema)
module.exports = model