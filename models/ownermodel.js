const mongoose = require("mongoose");

const ownerShema = mongoose.Schema({
    
    fullname: {
        type: String,
        minLength: 3,
        trim: true
    },
    email: String,
    password: String,
    orders: {
        type: Array,
        default: []
    },
    picture: String,
    gstin: String,
})

module.exports = mongoose.model("owner", ownerShema);
