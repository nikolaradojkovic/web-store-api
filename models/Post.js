const mongoose= require('mongoose');

const PostSchema = mongoose.Schema({
    title: String,
    desc: String
})

module.exports = mongoose.model('Post', PostSchema);
