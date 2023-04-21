const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Blog {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type security {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type shop {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type social {
    _id: ID!
    projectTitle: String!
    projectDescription: String!
    price: Int!
    reviews: [Review]
    rating: Int
    creator: Creator!
}
type user {
    _id: ID!
    username: String!
    password: String!
    reviews: [Review]
}
type Query {
    blogs: [Blog]
    security: [Security]
    shop: [Shop]
    social: [Social]
    blog(projectTitle:String!): Blog
    security(projectTitle:String!): Security
    shop(projectTitle:String!): Shop
    social(projectTitle:String!): Social
    reviewsByUser(userName: String!): [Review]
}
type Mutation {
    addBlog(reviews: [Review])
    addSecurity(reviews: [Review])
    addShop(reviews: [Review])
    addSocial(reviews: [Review])
    addUser(username: String!, password: String!): User
`;

module.exports = typeDefs;

