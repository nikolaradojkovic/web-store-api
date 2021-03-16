const express = require('express');
const router = express.Router();
const User = require('./../models/User')

/*router.get('/', async (req, res)=>{
    try{
        const users = await User.find();
        res.json(users)

    }catch (err) {
        res.json({message: err})
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.json(user)

    }catch (err) {
        res.json({message: err})
    }
});*/

router.get('/login/:email/:pass', async (req, res)=>{
    try{
        let user = null
        user = await User.findOne({email: req.params.email});
        res.json((user!==null && user.password===req.params.pass) ? 0 : user.roll)
    }catch (err) {
        res.json({message: err})
    }
});

router.post('/', (req, res)=>{
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        roll: req.body.roll
    });
    user.save().then(data=>{
        res.json(data);
    }).catch(err=>{
        res.json({message:err});
    });

});

router.delete('/:id', async (req, res)=>{
    try{
        const removedPost = await User.remove({_id: req.params.id});
        res.json(removedPost)
    }catch (err) {
        res.json({message: err})
    }
});

router.patch('/:id', async (req, res)=>{
    try{
        const user = await User.findById(req.params.id);
        const updatedPost = await User.updateOne({_id: req.params.id},{$set:{
                password:(req.body.password!==undefined) ? req.body.password : user.password,
                roll:(req.body.roll!==undefined) ? req.body.roll : user.roll
            }
        });
        res.json(updatedPost)
    }catch (err) {
        res.json({message: err})
    }
});


module.exports = router;
