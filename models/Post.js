const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    content: { type: String, required: true },
    author: { type: Schema.ObjectId, ref: 'User' },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = { Post }