const mongoose = require("mongoose");
const {Schema} = mongoose;

const products = new Schema({
    name: {type: String, require:true},
    description: {type: String, require:true},
    price: {type: Number, require:true},
    date: {type: Date, default:Date.now}
});
module.exports = mongoose.model("Products", products);