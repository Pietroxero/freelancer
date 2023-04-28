import {gql} from '@apollo/client';

export const Blogs = gql`
  query blogs {

    blog {
      _id
      project title
      project description
      price
      blog reviews
      rating
      creator
    }
  }
`;