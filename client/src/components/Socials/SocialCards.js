import React, { useState } from "react";
// import {Card} from '@chakra-ui/react';
import Card from "react-bootstrap/Card";
// import { Text } from '@chakra-ui/react'
import {FormControl, FormLabel} from '@chakra-ui/react';
import {Button} from '@chakra-ui/react';
// import Button from "react-bootstrap/Button";
import { useQuery, useMutation } from "@apollo/client";
import { Social } from "../utils/queries";
import { Newsocialreview } from "../utils/mutations";
import { Modal } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const ClientId = "AXHDiIQhvPES-ADJw3Bj-5kaRIpCpo52etwRBW3Jg67xDtyKJYpUGGccESFiPCb39C3dLUS5hCBQU0nW";

function SocialCards(props) {

  
  const { loading, data } = useQuery(Social);  

  const [socialState, setShow] = useState(getBaseState(data));

  const [addSocialReview, {error}] = useMutation(Newsocialreview);
  const handleAddToCorrectArray = (_id, socialreviews) => {
    addSocialReview({
      socialreviews : {review: reviewValue, user: reviewValue},
      variables: { _id, socialreviews }
    });
  };
let reviewUser;
let reviewValue;
    const handleSocialReviewValueChange = (event) => {
   reviewValue = event.target.value;
    };
    const handleSocialReviewUserChange = (event) => {
   reviewUser = event.target.value;
    };
  const handleSocialReviewSubmit = async (event) => {
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

    if (!data || !data.socials) {
      console.log()
      return {}
    }

    data.socials.forEach(socialData => {
      baseState[socialData._id] = false;
    });

  
    return baseState;
  }




  return (
    <div>
      {data.socials.map((social) => {
        const state = socialState[social._id];

        return (
          <>
          <Card key={social.projecttitle} className="project-card-view">
            <Card.Img variant="top" src={`${social.image}`} alt="card-img" />
            <Card.Body>
              <Card.Title>{social.projecttitle}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <div>
                  {" "}
                  <strong style={{ color: "#0B9FB7" }}>Description:</strong>{" "}
                  {social.projectdescription}
                </div>
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>PRICE:</strong>{" "}
                  {social.price}
                </div>
                <Button variant="primary" onClick={() => handleShow(social._id)}>
                  Leave a review
                </Button>

                <Modal show={state} onHide={() => handleClose(social._id)}>
                  <Modal.Header closeButton>
                    <Modal.Title>{social.projecttitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   <FormControl data-id={social._id} onSubmit={ handleSocialReviewSubmit}>
                 
                   <FormControl className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>Leave a Review! </FormLabel>
        <FormControl onChange={handleSocialReviewValueChange} as="textarea" rows={3} />
      </FormControl>
      <FormControl className="mb-3" controlId="exampleForm.ControlTextarea1">
        <FormLabel>User </FormLabel>
        <FormControl onChange={handleSocialReviewUserChange} as="textarea" rows={1} />
      </FormControl>
      
      
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
                   </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    
                  </Modal.Footer>
                </Modal>
                
                  {social.socialreviews.map((socialreviews) => {
                    return (
                      <div>
                        <strong style={{ color: "#0B82B7" }}>Review:</strong>{" "}
                        {socialreviews.review} <br></br>{" "}
                        <strong style={{ color: "red" }}>From:</strong>{" "}
                        {socialreviews.user} <br></br>{" "}
                      </div>
                    );
                  })}
                

                
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>Social Rating:</strong>{" "}
                  {social.rating}
                </div>
                
                  {social.creator.map((creator) => {
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
                            
                            value: social.price,
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
                            
                            value: social.price,
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

export default SocialCards;
