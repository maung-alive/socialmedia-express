const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    url: String,
    uploader: { type: Schema.ObjectId, ref: 'User' },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = { Image }