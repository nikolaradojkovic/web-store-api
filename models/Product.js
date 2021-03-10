const mongoose= require('mongoose');

const ProductSchema = mongoose.Schema({
    prod_name: {
        type: String,
        required: true
    },
    prod_desc: {
        type: String,
        required: true
    },
    prod_img: {
        type: String,
        required: true
    },
    prod_price: {
        type: String,
        required: true
    },
    prod_quantity: {
        type: String,
        required: true
    },
    prod_discount:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', ProductSchema);
