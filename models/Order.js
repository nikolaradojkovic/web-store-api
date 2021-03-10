const mongoose= require('mongoose');
const ProductOrder = require('./../models/ProductOrder')
const CustomerOrder = require('./../models/CustomerOrder')

const OrderSchema = mongoose.Schema({

    customer: {
        type:CustomerOrder.schema,
        required:true
    },
    products: {
        type:[ProductOrder.schema],
        required:true
    }/*[
    {
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
    }
    ]*/,
    order_received: {
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('Order', OrderSchema);
