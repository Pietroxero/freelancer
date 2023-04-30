import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useQuery, useMutation } from "@apollo/client";
import { Blogs } from "../utils/queries";
import { Newblogreview } from "../utils/mutations";
import { Modal } from "react-bootstrap";

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
          <Card key={blog.projecttitle} className="project-card-view">
            <Card.Img variant="top" src={`${blog.image}`} alt="card-img" />
            <Card.Body>
              <Card.Title>{blog.projecttitle}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>Description:</strong>{" "}
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
                   <Form data-id={blog._id} onSubmit={ handleBlogReviewSubmit}>
                 
                   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a Review! </Form.Label>
        <Form.Control onChange={handleBlogReviewValueChange} as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>User </Form.Label>
        <Form.Control onChange={handleBlogReviewUserChange} as="textarea" rows={1} />
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
                   </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    
                  </Modal.Footer>
                </Modal>
                
                  {blog.blogreviews.map((blogreviews) => {
                    return (
                      <div>
                        <strong style={{ color: "red" }}>Review:</strong>{" "}
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
                        <strong style={{ color: "red" }}>
                          This wonderful site was crafted by:
                        </strong>{" "}
                        {creator.username}
                      </div>
                    );
                  })}
                
              </Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default BlogCards;
