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
    projecttitle: String!
    projectdescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type Security {
    _id: ID!
    projecttitle: String!
    projectdescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type Shop {
    _id: ID!
    projecttitle: String!
    projectdescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type Social {
    _id: ID!
    projecttitle: String!
    projectdescription: String!
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
type Auth {
    token: ID!
    user: User
  }
type Query {
    blogs: [Blog]
    securitys: [Security]
    shops: [Shop]
    socials: [Social]
    blog(projecttitle:String!): Blog
    security(projecttitle:String!): Security
    shop(projecttitle:String!): Shop
    social(projecttitle:String!): Social
    reviewsByUser(username: String!): User
    
}
type Mutation {
    addBlogReview(reviews: String) : Blog
    addSecurityReview(reviews: String) : Security
    addShopReview(reviews: String) : Shop
    addSocialReview(reviews: String) : Social
    removeBlogReview(reviewId: ID!): Blog
    removeSecurityReview(reviewid: ID!): Security
    removeShopReview(reviewid: ID!): Shop
    removeSocialReview(reviewid: ID!): Social
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    
}
`;

module.exports = typeDefs;

