import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import {FormControl, FormLabel} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react';
import { useQuery, useMutation } from "@apollo/client";
import { Securitys } from "../utils/queries";
import { Newsecurityreview } from "../utils/mutations";
import { Modal } from "@chakra-ui/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const ClientId = "AXHDiIQhvPES-ADJw3Bj-5kaRIpCpo52etwRBW3Jg67xDtyKJYpUGGccESFiPCb39C3dLUS5hCBQU0nW";

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
          <>
          <Card key={security.projecttitle} className="project-card-view">
            <Card.Img variant="top" src={`${security.image}`} alt="card-img" />
            <Card.Body>
              <Card.Title>{security.projecttitle}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <div>
                  {" "}
                  <strong style={{ color: "#0B9FB7" }}>Description:</strong>{" "}
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
                   <FormControl data-id={security._id} onSubmit={ handleSecurityReviewSubmit}>
                 
                   <FormControl className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>Leave a Review! </FormLabel>
        <FormControl onChange={handleSecurityReviewValueChange} as="textarea" rows={3} />
      </FormControl>
      <FormControl className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>User </FormLabel>
        <FormControl onChange={handleSecurityReviewUserChange} as="textarea" rows={1} />
      </FormControl>
      
      
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
                   </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    
                  </Modal.Footer>
                </Modal>
                
                  {security.securityreviews.map((securityreviews) => {
                    return (
                      <div>
                        <strong style={{ color: "#0B82B7" }}>Review:</strong>{" "}
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
                        <strong style={{ color: "#612AF0" }}>
                          This wonderful site was crafted by:
                        </strong>{" "}
                        {creator.username}
                      </div>
                    );
                  })}

<PayPalScriptProvider options={{ "client-id": ClientId }} >
          <PayPalButtons  style={{ layout: "horizontal", color: "silver"}} createOrder={(data, actions) => {
            return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            
                            value: security.price,
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
                
              </Card.Text>
            </Card.Body>
          </Card>
          <div>
        
          {/* <PayPalScriptProvider options={{ "client-id": ClientId }} >
          <PayPalButtons  style={{ layout: "horizontal", color: "silver"}} createOrder={(data, actions) => {
            return actions.order
            .create({
                purchase_units: [
                    {
                        amount: {
                            
                            value: security.price,
                        },
                    },
                ],
            })
            .then((orderId) => {
                // Your code here after create the order
                return orderId;
            });
          }} />
      </PayPalScriptProvider>    */}
      
      </div>  </>
        );
      })}
    </div>
  );
}

export default SecurityCards;
