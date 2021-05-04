
const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    gender: {
        type: String,
        enum: ["male", "female"],
        default: "male"

    }
})
const model = mongoose.model("user", userSchema)

module.exports = model


