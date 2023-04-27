const {Blog, Security, Shop, Social} = require('../models');
const { signToken } = require('../utils/auth');

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
        addUser: async (parent, {userName, password}) => {
            const user = await User.create({userName, password});
            const token = signToken(user);
            return ({token, user});
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
        login: async (parent, { userName, password }) => {
            const user = await User.findOne({ userName });
      
            if (!user) {
              throw new AuthenticationError('No user with this email found!');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect password!');
            }
      
            const token = signToken(user);
            return { token, user };
          },
    }, 




};
    module.exports = resolvers;