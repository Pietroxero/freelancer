import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useQuery, useMutation } from "@apollo/client";
import { Securitys } from "../utils/queries";
import { Newsecurityreview } from "../utils/mutations";
import { Modal } from "react-bootstrap";

function SecurityCards(props) {

  
  const { loading, data } = useQuery(Securitys);  

  const [securityState, setShow] = useState(getBaseState(data));

  const [addSecurityReview, {error}] = useMutation(Newsecurityreview);
  const handleAddToCorrectArray = (_id, securityreviews) => {
    addSecurityReview({
      securityreviews : {review: reviewValue, user: reviewValue},
      variables: { _id, securityreviews }
    });
  };
let reviewUser;
let reviewValue;
    const handleSecurityReviewValueChange = (event) => {
   reviewValue = event.target.value;
    };
    const handleSecurityReviewUserChange = (event) => {
   reviewUser = event.target.value;
    };
  const handleSecurityReviewSubmit = async (event) => {
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

    if (!data || !data.securitys) {
      console.log()
      return {}
    }

    data.securitys.forEach(securityData => {
      baseState[securityData._id] = false;
    });

  
    return baseState;
  }




  return (
    <div>
      {data.securitys.map((security) => {
        const state = securityState[security._id];

        return (
          <Card key={security.projecttitle} className="project-card-view">
            <Card.Img variant="top" src={`${security.image}`} alt="card-img" />
            <Card.Body>
              <Card.Title>{security.projecttitle}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>Description:</strong>{" "}
                  {security.projectdescription}
                </div>
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>PRICE:</strong>{" "}
                  {security.price}
                </div>
                <Button variant="primary" onClick={() => handleShow(security._id)}>
                  Leave a review
                </Button>

                <Modal show={state} onHide={() => handleClose(security._id)}>
                  <Modal.Header closeButton>
                    <Modal.Title>{security.projecttitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   <Form data-id={security._id} onSubmit={ handleSecurityReviewSubmit}>
                 
                   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a Review! </Form.Label>
        <Form.Control onChange={handleSecurityReviewValueChange} as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>User </Form.Label>
        <Form.Control onChange={handleSecurityReviewUserChange} as="textarea" rows={1} />
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
                   </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    
                  </Modal.Footer>
                </Modal>
                
                  {security.securityreviews.map((securityreviews) => {
                    return (
                      <div>
                        <strong style={{ color: "red" }}>Review:</strong>{" "}
                        {securityreviews.review} <br></br>{" "}
                        <strong style={{ color: "red" }}>From:</strong>{" "}
                        {securityreviews.user} <br></br>{" "}
                      </div>
                    );
                  })}
                

                
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>Security Rating:</strong>{" "}
                  {security.rating}
                </div>
                
                  {security.creator.map((creator) => {
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

export default SecurityCards;
