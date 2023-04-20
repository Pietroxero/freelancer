const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    projectTitle: {
        type: String,
        required: true,
        unique: true
    },
    projectDescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    rating: {
        type: Number,
        required: true
    },
    creator : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
});


const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;