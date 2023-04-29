import React from "react";
import Card from "react-bootstrap/Card";


import { useQuery } from "@apollo/client";
import { Blogs } from "../utils/queries";




function BlogCards(props) {
  
  console.log(props, "props");
  const { loading, error, data } = useQuery(Blogs);
  console.log(error, "error");
  console.log(data, "data");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

 

  return (
    <div>
      {data.blogs.map((blog) => {

        return(<Card key={blog.projecttitle} className="project-card-view">
          <Card.Img variant="top" src={`${blog.image}`} alt="card-img" />
          <Card.Body>
            <Card.Title>{blog.projecttitle}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              <p> <strong style={{color: "red"}}>Description:</strong> {blog.projectdescription}</p>
              <p> <strong style={{color: "red"}}>PRICE:</strong> {blog.price}</p>
              <p>
                {blog.blogreviews.map((blogreviews) => {
                  return (
                    <p>
                     <strong style={{color: "red"}}>Review:</strong>  {blogreviews.review} <br></br>  <strong style={{color: "red"}}>From:</strong> {blogreviews.user}
                    </p>
                  );
                })}
              </p>
              <p> <strong style={{color: "red"}}>Blog Rating:</strong> {blog.rating}</p>
              <p>
                {blog.creator.map((creator) => {
                  return <p> <strong style={{color: "red"}}>This wonderful site was crafted by:</strong> {creator.username}</p>;
                })}
              </p>
            </Card.Text>
          </Card.Body>
        </Card>)
})}
    </div>
  );
}

export default BlogCards;
