const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Rest_user = require('../modules/model');


router.get('/', async (req,res)=>{
    try {
        const user = await Rest_user.find();
        res.json(user);
    }catch(err) {
        res.json({message:err});
    }
})


router.post('/', async (req, res) => {

    const user = new Rest_user({
        name:req.body.name,
        nation:req.body.nation
    });

    try {
        const savePost = await user.save();
        res.json(savePost);

    }
    catch(err) {
        res.json({message:err});
    }

})

router.get('/:postId', async (req, res)=> {
    
    try {
        const user = await Rest_user.findById(req.params.postId);
        res.json(user);
    }
    catch {
        res.json({mesesage: err});
    }

})

router.delete('/:postId', async (req, res)=>{
    
    try {
      const removeUser = await Rest_user.remove({_id: req.params.postId });
      res.json(removeUser);
    }
    catch(err) {
      res.json({message:err});
    }
})

router.patch('/:postId', async (req, res)=>{
    try {
      const updateName = await Rest_user.updateOne(
          {_id: req.params.postId }, 
          {$set : {name:req.body.name}}
      );

      res.json(updateName);
    }
    catch(err) {
      res.json({message:err});
    }
})



module.exports = router;

