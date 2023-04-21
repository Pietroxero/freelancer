const mongoose = require('mongoose');
const opts = { timestamps: true, toJSON: { virtuals: true } };
const securityReviewSchema = mongoose.Schema({
    review: { type: String, required: true , minLength: 5, maxLength: 280},
    user: {type: String, required: true, ref: 'User'}
});
const creatorSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, 'Must match an email address!'] },

});

const securitySchema = mongoose.Schema({
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
    securityReviews:  [securityReviewSchema],
    rating: {
        type: Number,
        required: true
    },
    creator : [creatorSchema]
},
opts
);
securityReviewSchema.virtual('reviewCount').get(function() {
    return this.reviews.length;
  });

const Security = mongoose.model('Security', securitySchema);
module.exports = Security;