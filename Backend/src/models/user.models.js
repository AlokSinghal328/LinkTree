const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    title :  {
        type: String,
        required: [true, "Link title is required"],
        trim: true,
    },

    url : {
        type: String,
        required: [true, "Link is required"],
    },

    clicks : {
        type: Number,
        default: 0,
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    }
});

const userSchema = new mongoose.Schema({
    name :  {
        type: String,
        required : [true, "Name is required"],
        trim: true,
    },
    email : {
        type: String,
        unique: true,
        required: [true, " email is required"],
        trim: true,
        lowercase: true,
    },

    password :  {
        type: String,
        required: [true, "Password is required"],
        minlength: 6,
        select: false,
    },

    username :  {
        type: String,
        required: [true, "username is required"],
        unique: true,
        trim: true,
        lowercase: true,
        index: true,
    },

    shortId : {
        type: String,
        required: true,
        unique: true,
        index: true,
    },

    links : [linkSchema],

}, {timestamps: time});

const User = mongoose.model('User', userSchema);

module.exports = User;