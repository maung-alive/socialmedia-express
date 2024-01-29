const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: String,
    author: { type: Schema.ObjectId, ref: 'User' },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { Comment }