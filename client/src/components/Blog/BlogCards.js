import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {FormControl, FormLabel} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react';
import { useQuery, useMutation } from "@apollo/client";
import { Blogs } from "../utils/queries";
import { Newblogreview } from "../utils/mutations";
import { Modal } from "@chakra-ui/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const ClientId = "AXHDiIQhvPES-ADJw3Bj-5kaRIpCpo52etwRBW3Jg67xDtyKJYpUGGccESFiPCb39C3dLUS5hCBQU0nW";



function BlogCards(props) {

  
  const { loading, data } = useQuery(Blogs);  

  const [blogState, setShow] = useState(getBaseState(data));

  const [addBlogReview, {error}] = useMutation(Newblogreview);
  const handleAddToCorrectArray = (_id, blogreviews) => {
    addBlogReview({
      blogreviews : {review: reviewValue, user: reviewValue},
      variables: { _id, blogreviews }
    });
  };
let reviewUser;
let reviewValue;
    const handleBlogReviewValueChange = (event) => {
   reviewValue = event.target.value;
    };
    const handleBlogReviewUserChange = (event) => {
   reviewUser = event.target.value;
    };
  const handleBlogReviewSubmit = async (event) => {
    event.preventDefault();
  
    handleAddToCorrectArray(event.target.getAttribute("data-id"), {review: reviewValue, user: reviewUser});
    handleClose(event.target.getAttribute("data-id"));
  };

  const handleClose = (_id) => setShow((prevState) => {
  
 
    const newState = {...prevState};
    newState[_id] = false;
    return newState;
  });
  const handleShow = (_id) => setShow((prevState) => {

  
    const newState = {...prevState};
    newState[_id] = true;
    return newState;
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;


  function getBaseState(data) {
    const baseState = {};

    if (!data || !data.blogs) {
      console.log()
      return {}
    }

    data.blogs.forEach(blogData => {
      baseState[blogData._id] = false;
    });

  
    return baseState;
  }




  return (
    
    <div>
      {data.blogs.map((blog) => {
        const state = blogState[blog._id];

        return (
          <>
          <Card key={blog.projecttitle} className="project-card-view">
            <Card.Img variant="top" src={`${blog.image}`} alt="card-img" />
            <Card.Body>
              <Card.Title>{blog.projecttitle}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <div>
                  {" "}
                  <strong style={{ color: "#0B9FB7" }}>Description:</strong>{" "}
                  {blog.projectdescription}
                </div>
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>PRICE:</strong>{" "}
                  {blog.price}
                </div>
                <Button variant="primary" onClick={() => handleShow(blog._id)}>
                  Leave a review
                </Button>

                <Modal show={state} onHide={() => handleClose(blog._id)}>
                  <Modal.Header closeButton>
                    <Modal.Title>{blog.projecttitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   <FormControl data-id={blog._id} onSubmit={ handleBlogReviewSubmit}>
                 
                   <FormControl className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>Leave a Review! </FormLabel>
        <FormControl onChange={handleBlogReviewValueChange} as="textarea" rows={3} />
      </FormControl>
      <FormControl className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>User </FormLabel>
        <FormControl onChange={handleBlogReviewUserChange} as="textarea" rows={1} />
      </FormControl>
      
      
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
                   </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    
                  </Modal.Footer>
                </Modal>
                
                  {blog.blogreviews.map((blogreviews) => {
                    return (
                      <div>
                        <strong style={{ color: "#0B82B7" }}>Review:</strong>{" "}
                        {blogreviews.review} <br></br>{" "}
                        <strong style={{ color: "red" }}>From:</strong>{" "}
                        {blogreviews.user} <br></br>{" "}
                      </div>
                    );
                  })}
                

                
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>Blog Rating:</strong>{" "}
                  {blog.rating}
                </div>
                
                  {blog.creator.map((creator) => {
                    return (
                      <div>
                        {" "}
                        <strong style={{ color: "#612AF0" }}>
                          This wonderful site was crafted by:
                        </strong>{" "}
                        {creator.username}
                      </div>
                    );
                  })}
                
              </Card.Text>
            </Card.Body>
          </Card>
          <div>
                <PayPalScriptProvider options={{ "client-id": ClientId }} >
                <PayPalButtons  style={{ layout: "horizontal", color: "silver"}} createOrder={(data, actions) => {
                  return actions.order
                  .create({
                      purchase_units: [
                          {
                              amount: {
                                  
                                  value: blog.price,
                              },
                          },
                      ],
                  })
                  .then((orderId) => {
                      // Your code here after create the order
                      return orderId;
                  });
                }} />
            </PayPalScriptProvider>   
            </div>  </>        
        );
      })}

    </div>
    
  );
}

export default BlogCards;
