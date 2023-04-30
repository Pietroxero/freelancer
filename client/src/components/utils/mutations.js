import { gql } from "@apollo/client";

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


