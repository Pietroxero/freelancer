const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Creator {
    _id: ID!
    username: String!
    email: String!
}
type Review {
    _id: ID!
    review: String!
    user: User!
}
type Blog {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type Security {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type Shop {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type Social {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type User {
    _id: ID!
    username: String!
    password: String!
    reviews: [Review]
}
type Query {
    blogs: [Blog]
    securitys: [Security]
    shops: [Shop]
    socials: [Social]
    blog(projectTitle:String!): Blog
    security(projectTitle:String!): Security
    shop(projectTitle:String!): Shop
    social(projectTitle:String!): Social
    reviewsByUser(userName: String!): User
}
type Mutation {
    addBlogReview(reviews: String) : Blog
    addSecurityReview(reviews: String) : Security
    addShopReview(reviews: String) : Shop
    addSocialReview(reviews: String) : Social
    addUser(username: String!, password: String!): User
    removeBlogReview(reviewId: ID!): Blog
    removeSecurityReview(reviewId: ID!): Security
    removeShopReview(reviewId: ID!): Shop
    removeSocialReview(reviewId: ID!): Social
    
}
`;

module.exports = typeDefs;

