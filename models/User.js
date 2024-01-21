const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: String,
    email: String,
    fullname: String,
    birth: Date,
    gender: Boolean,
    phoneNumber: { type: Number },
    biography: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    job: { type: String, default: "" },
    following: [{ type: Schema.ObjectId, ref: 'User' }],
    followers: [{ type: Schema.ObjectId, ref: 'User' }],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastLogin: {
        type: Date,
        required: true,
        default: Date.now
    },
});

const User = mongoose.model("User", UserSchema);

module.exports = { User }