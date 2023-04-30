import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const Newsocialreview = gql`
mutation Newsocialreview($_id: String!, $socialreviews: ReviewInput!) {
    addSocialReview(_id: $_id, socialreviews: $socialreviews) {
     _id 
      socialreviews {         
        review
        user
        }
    }
}
`;

export const Newshopreview = gql`
mutation Newshopreview($_id: String!, $shopreviews: ReviewInput!) {
    addShopReview(_id: $_id, shopreviews: $shopreviews) {
     _id 
      shopreviews {         
        review
        user
        }
    }
}
`;

export const Newsecurityreview = gql`
mutation Newsecurityreview($_id: String!, $securityreviews: ReviewInput!) {
    addSecurityReview(_id: $_id, securityreviews: $securityreviews) {
     _id 
      securityreviews {         
        review
        user
        }
    }
}
`;

export const Newblogreview = gql`
mutation Newblogreview($_id: String!, $blogreviews: ReviewInput!) {
    addBlogReview(_id: $_id, blogreviews: $blogreviews) {
     _id 
      blogreviews {         
        review
        user
        }
    }
}
`;
