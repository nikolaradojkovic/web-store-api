const mongoose= require('mongoose');

const ProductOrderSchema = mongoose.Schema({

    prod_id: {
        type: String,
            required: true
    },
    prod_name: {
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
    }

})

module.exports = mongoose.model('ProductOrder', ProductOrderSchema);
