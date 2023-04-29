import {gql} from '@apollo/client';

export const Blogs = gql`
query  {

  blogs {
    _id
    projecttitle
    projectdescription
    price
    blogreviews {review, user}
    rating
    creator{username}
  }
  
}
`;