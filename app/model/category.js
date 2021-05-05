const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: String,
})


const model = mongoose.model("category",categorySchema);


module.exports = model;

