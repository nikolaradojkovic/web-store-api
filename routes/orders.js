const express = require('express');
const router = express.Router();
const Order = require('./../models/Order')
const ProductOrder = require('./../models/ProductOrder')
const CustomerOrder = require('./../models/CustomerOrder')

router.get('/', async (req, res)=>{
    try{
        const orders = await Order.find();
        res.json(orders)

    }catch (err) {
        res.json({message: err})
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const order = await Order.findById(req.params.id);
        res.json(order)

    }catch (err) {
        res.json({message: err})
    }
});

router.post('/', (req, res)=>{
    /*const order = new Order({
        customer: new CustomerOrder({
            cus_email:req.body.cus_email,
            cus_credentials:req.body.cus_credentials,
            cus_address:req.body.cus_address,
            cus_phone:req.body.cus_phone
        }),
        products: new ProductOrder(),
        roll: req.body.roll
    });*/
    const order = new Order(req.body);
    order.save().then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    });

});

router.delete('/:id', async (req, res)=>{
    try{
        const removedPost = await Order.remove({_id: req.params.id});
        res.json(removedPost)
    }catch (err) {
        res.json({message: err})
    }
});



module.exports = router;
