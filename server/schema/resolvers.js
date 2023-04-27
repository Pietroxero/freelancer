const { Blog, Security, Shop, Social, User } = require("../models");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("apollo-server-express");
const mongoose = require("mongoose");

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
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("Please log in!");
    },
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
      return Blog.findOneAndUpdate(
        { projectTitle: title },
        { $push: { blogReviews: { review } } },
        { new: true, runValidators: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    addSecurityReview: async (parent, { title, review }, context) => {
        if (context.user) {
      return Security.findOneAndUpdate(
        { projectTitle: title },
        { $push: { securityReviews: { review } } },
        { new: true, runValidators: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    addShopReview: async (parent, { title, review}, context) => {
        if (context.user) {
      return Shop.findOneAndUpdate(
        { projectTitle: title },
        { $push: { shopReviews: { review } } },
        { new: true, runValidators: true }
      )}
        throw new AuthenticationError("Please log in!");
    },
    addSocialReview: async (parent, { title, review }, context) => {
        if (context.user) {
      return Social.findOneAndUpdate(
        { projectTitle: title },
        { $push: { socialReviews: { review } } },
        { new: true, runValidators: true }
      )}
        throw new AuthenticationError("Please log in!");
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
