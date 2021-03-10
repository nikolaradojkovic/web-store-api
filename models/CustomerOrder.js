const mongoose= require('mongoose');

const CustomerOrderSchema = mongoose.Schema({

    cus_email: {
        type: String,
        required: true
    },
    cus_credentials: {
        type: String,
        required: true
    },
    cus_address: {
        type: String,
        required: true
    },
    cus_phone: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('CustomerOrder', CustomerOrderSchema);
