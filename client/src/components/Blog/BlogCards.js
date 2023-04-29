import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { useQuery} from '@apollo/client';
import {Blogs } from '../utils/queries';

//here we can add in buttons to the card
function BlogCards(props) {

 console.log(props, "props")
    const { loading, error, data } = useQuery(
      Blogs
      
      );
    console.log(error, "error")
    console.log(data, "data")
  if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
   

  return (
   <div>
    {data.blogs.map((blog) => (
          <Card key={blog.projecttitle} className="project-card-view">
              <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        
        <Card.Title>{blog.projecttitle}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          <p>{blog.projectdescription}</p>
          <p>{blog.price}</p>
          <p>{blog.blogreviews.map((blogreviews) => {
            return <p>{blogreviews.review} {blogreviews.user}</p>
          })}</p>
          <p>{blog.rating}</p>
          <p>{blog.creator.map((creator) => {
            return <p>{creator.username}</p>
          })}</p>
        </Card.Text>
        </Card.Body>  

          </Card>
        ))}
    </div>
  )};

     

export default BlogCards;
