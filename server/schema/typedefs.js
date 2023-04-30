const {gql} = require('apollo-server-express');

const typeDefs = gql`
type Creator {
    _id: ID!
    username: String!
    email: String!
}
type Review {
    review: String!
    user: String!
}
input ReviewInput {
    review: String!
    user: String!
}
type Blog {
    _id: ID!
    projecttitle : String!
    projectdescription : String!
    price: Float!
    blogreviews: [Review]
    rating: Int
    creator: [Creator]!
    image: String!
}
type Security {
    _id: ID!
    projecttitle: String!
    projectdescription: String!
    price: Float!
    securityreviews: [Review]
    rating: Int
    creator: [Creator]!
    image: String!
}
type Shop {
    _id: ID!
    projecttitle: String!
    projectdescription: String!
    price: Float!
    shopreviews: [Review]
    rating: Int
    creator: [Creator]!
    image: String!
}
type Social {
    _id: ID!
    projecttitle: String!
    projectdescription: String!
    price: Float!
    socialreviews: [Review]
    rating: Int
    creator: [Creator]!
    image: String!
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
    blogreviews(review: String!, user: String): Blog
    securityreviews(review: String!, user: String): Security
    shopreviews(review: String!, user: String): Shop
    socialreviews(review: String!, user: String): Social
   
   
   
    
}
type Mutation {
    addBlogReview(review: String, user: String) : Blog
    addSecurityReview(review: String, user: String) : Security
    addShopReview(review: String, user: String) : Shop
    addSocialReview(_id: String, socialreviews: ReviewInput) : Social
    removeBlogReview(reviewId: ID!): Blog
    removeSecurityReview(reviewid: ID!): Security
    removeShopReview(reviewid: ID!): Shop
    removeSocialReview(reviewid: ID!): Social
    addUser(username: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    
}
`;

module.exports = typeDefs;

