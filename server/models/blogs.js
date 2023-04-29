const mongoose = require('mongoose');
const opts = { timestamps: true, toJSON: { virtuals: true } };
const blogReviewSchema = mongoose.Schema({
    review: { type: String, required: true , minLength: 5, maxLength: 280},
    user: {type: String, required: true}
});
const creatorSchema = mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, match: [/.+@.+\..+/, 'Must match an email address!'] },

});

const blogSchema = mongoose.Schema({
    projecttitle: {
        type: String,
        required: true
    },
    projectdescription: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    blogreviews:  [blogReviewSchema],
    rating: {
        type: Number,
        required: true
    },
    creator : [creatorSchema],
    image: {
        type: String,
        required: true
    }

},
opts);

blogReviewSchema.virtual('reviewCount').get(function() {
    return this.reviews.length;
  });

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;