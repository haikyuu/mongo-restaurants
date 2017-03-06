const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Author Schema definition
const Adress = new Schema({
    building: String,
    coord: [Number],
    street: String,
    zipcode: String,
})
const Restaurant = new Schema({
    address: Adress,
    borough: String,
    cuisine: String,
    grades: [
        { grade: String },
        { score: Number },
        { date: { $date: Number } },
    ],
    name: String,
    restaurant_id: String    
})
// Exports the Restaurant for use elsewhere
module.exports = mongoose.model('restaurant', Restaurant);