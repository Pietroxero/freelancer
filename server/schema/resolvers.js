const {Blog, Security, Shop, Social} = require('../models');

const resolvers = {
    Query: {
        blogs: async () => {
            return Blog.find();
        },
        securitys: async () => {
            return Security.find();
        },
        shops: async () => {
            return Shop.find();
        },
        socials: async () => {
            return Social.find();
        }
    },
    Mutation: {
        addUser: async (parent, {userName, Password}) => {
            return User.create({userName, Password});
        },
        addBlogReview: async (parent, {title, review}) => {
            return Blog.findOneAndUpdate(
                {projectTitle: title},
                {$push: {blogReviews: {review}}},
                {new: true, runValidators: true}
            );
        },
        addSecurityReview: async (parent, {title, review}) => {
            return Security.findOneAndUpdate(
                {projectTitle: title},
                {$push: {securityReviews: {review}}},
                {new: true, runValidators: true}
            );
        },
        addShopReview: async (parent, {title, review}) => {
            return Shop.findOneAndUpdate(
                {projectTitle: title},
                {$push: {shopReviews: {review}}},
                {new: true, runValidators: true}
            );
        },
        addSocialReview: async (parent, {title, review}) => {
            return Social.findOneAndUpdate(
                {projectTitle: title},
                {$push: {socialReviews: {review}}},
                {new: true, runValidators: true}
            );
        },
        removeBlogReview: async (parent, {reviewId, review}) => {
            return Blog.findOneAndUpdate(
                {_id: reviewId},
                {$pull: {blogReviews: {review}}},
                {new: true}
            );
        },
        removeSecurityReview: async (parent, {reviewId, review}) => {
            return Security.findOneAndUpdate(
                {_id: reviewId},
                {$pull: {securityReviews: {review}}},
                {new: true}
            );
        },
        removeShopReview: async (parent, {reviewId, review}) => {
            return Shop.findOneAndUpdate(
                {_id: reviewId},
                {$pull: {shopReviews: {review}}},
                {new: true}
            );
        },
        removeSocialReview: async (parent, {reviewId, review}) => {
            return Social.findOneAndUpdate(
                {_id: reviewId},
                {$pull: {socialReviews: {review}}},
                {new: true}
            );
        },
    }, 




};
    module.exports = resolvers;