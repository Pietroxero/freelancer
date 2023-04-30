const { Blog, Security, Shop, Social, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");


const resolvers = {
  Query: {
    blogs: async () => {
      return Blog.find({}).populate({
        path: "creator",
        populate: "creator"
      }).populate("blogreviews");
    },
    securitys: async () => {
      return Security.find().populate({
        path: "creator",
        populate: "creator"
      }).populate("securityreviews");
    },
    shops: async () => {
      return Shop.find().populate({
        path: "creator",
        populate: "creator"
      }).populate("shopreviews");
    },
    socials: async () => {
      return Social.find().populate({
        path: "creator",
        populate: "creator"
      }).populate("socialreviews");
    }
 
  },
  Mutation: {
    addUser: async (parent, { userName, password }, context) => {
        if (context.user) {
          const user = await User.create({ userName, password });
      const token = signToken(user);
      return { token, user };
        }
        throw new AuthenticationError("Please log in!");
      
    },
    addBlogReview: async (parent, { title, review }, context) => {
        if (context.user) {
      return Blog.Create(
        { projectTitle: title },
        { $push: { blogReviews: { review } } },
        { new: true, runValidators: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    addSecurityReview: async (parent, { title, review }, context) => {
        if (context.user) {
      return Security.Create(
        { projectTitle: title },
        { $push: { securityReviews: { review } } },
        { new: true, runValidators: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    addShopReview: async (parent, { title, review}, context) => {
        if (context.user) {
      return Shop.Create(
        { projectTitle: title },
        { $push: { shopReviews: { review } } },
        { new: true, runValidators: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    addSocialReview: async (parent, { _id, socialreviews }) => {
        // if (context.user) {
          console.log(_id), console.log(socialreviews, "socialreviews");
          const newSocialReview = await Social.findOneAndUpdate(
            { _id: _id },
        { $push: { socialreviews: socialreviews } },
        { new: true, runValidators: true }
          );
      return newSocialReview;
      
      
    // }
        // throw new AuthenticationError("Please log in!");
    },
    removeBlogReview: async (parent, { reviewId, review }, context) => {
        if (context.user) {
      return Blog.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { blogReviews: { review } } },
        { new: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    removeSecurityReview: async (parent, { reviewId, review }, context) => {
        if (context.user) {
      return Security.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { securityReviews: { review } } },
        { new: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    removeShopReview: async (parent, { reviewId, review }, context) => {
        if (context.user) {
      return Shop.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { shopReviews: { review } } },
        { new: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    removeSocialReview: async (parent, { reviewId, review }, context) => {
        if (context.user) {
      return Social.findOneAndUpdate(
        { _id: reviewId },
        { $pull: { socialReviews: { review } } },
        { new: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });

      if (!user) {
        throw new AuthenticationError("Email not found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};
module.exports = resolvers;
