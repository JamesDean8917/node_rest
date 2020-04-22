const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    nation:{
        type:String,
        required:true,
    },
    date: {
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('rest_user', PostSchema);

