import {gql} from '@apollo/client';

export const Blogs = gql`
query  {

  blogs{
    _id
    projecttitle
    projectdescription
    price
    blogreviews{review, user}
    rating
    creator{username}
    image
  }
  
}
`;
export const Securitys = gql`
query  {
securitys {
    _id
    projecttitle
    projectdescription
    price
    securityreviews{review, user}
    rating
    creator{username}
    image
  }
}
`;

export const Shop = gql`
query  {
shops {
    _id
    projecttitle
    projectdescription
    price
    shopreviews{review, user}
    rating
    creator{username}
    image
  }
}
`;

export const Social = gql`
query  {
socials {
    _id
    projecttitle
    projectdescription
    price
    socialreviews{review, user}
    rating
    creator{username}
    image
  }
}
`;