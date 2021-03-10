const express = require('express');
const router = express.Router();
const Product = require('./../models/Product')

router.get('/', async (req, res)=>{
    try{
        const products = await Product.find();
        res.json(products)

    }catch (err) {
        res.json({message: err})
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id);
        res.json(product)

    }catch (err) {
        res.json({message: err})
    }
});

router.post('/', (req, res)=>{
    const product = new Product({
        prod_name: req.body.prod_name,
        prod_desc: req.body.prod_desc,
        prod_img: req.body.prod_img,
        prod_price: req.body.prod_price,
        prod_quantity: req.body.prod_quantity,
        prod_discount: req.body.prod_discount
    });
    product.save().then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    });

});

router.delete('/:id', async (req, res)=>{
    try{
        const removedPost = await Product.remove({_id: req.params.id});
        res.json(removedPost)
    }catch (err) {
        res.json({message: err})
    }
});

router.patch('/:id', async (req, res)=>{
    try{
        const product = await Product.findById(req.params.id);
        const updatedPost = await Product.updateOne({_id: req.params.id},{$set:{
                prod_name:(req.body.prod_name!==undefined) ? req.body.prod_name : product.prod_name,
                prod_desc:(req.body.prod_desc!==undefined) ? req.body.prod_desc : product.prod_desc,
                prod_img:(req.body.prod_img!==undefined) ? req.body.prod_img : product.prod_img,
                prod_price:(req.body.prod_price!==undefined) ? req.body.prod_price : product.prod_price,
                prod_quantity:(req.body.prod_quantity!==undefined) ? req.body.prod_quantity : product.prod_quantity,
                prod_discount:(req.body.prod_discount!==undefined) ? req.body.prod_discount : product.prod_discount,
                }
            });
        res.json(updatedPost)
    }catch (err) {
        res.json({message: err})
    }
});


module.exports = router;
