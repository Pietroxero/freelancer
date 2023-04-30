import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useQuery, useMutation } from "@apollo/client";
import { Shop } from "../utils/queries";
import { Newshopreview } from "../utils/mutations";
import { Modal } from "react-bootstrap";

function ShopCards(props) {

  
  const { loading, data } = useQuery(Shop);  

  const [shopState, setShow] = useState(getBaseState(data));

  const [addShopReview, {error}] = useMutation(Newshopreview);
  const handleAddToCorrectArray = (_id, shopreviews) => {
    addShopReview({
      shopreviews : {review: reviewValue, user: reviewValue},
      variables: { _id, shopreviews }
    });
  };
let reviewUser;
let reviewValue;
    const handleShopReviewValueChange = (event) => {
   reviewValue = event.target.value;
    };
    const handleShopReviewUserChange = (event) => {
   reviewUser = event.target.value;
    };
  const handleShopReviewSubmit = async (event) => {
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

    if (!data || !data.shops) {
      console.log()
      return {}
    }

    data.shops.forEach(shopData => {
      baseState[shopData._id] = false;
    });

  
    return baseState;
  }




  return (
    <div>
      {data.shops.map((shop) => {
        const state = shopState[shop._id];

        return (
          <Card key={shop.projecttitle} className="project-card-view">
            <Card.Img variant="top" src={`${shop.image}`} alt="card-img" />
            <Card.Body>
              <Card.Title>{shop.projecttitle}</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>Description:</strong>{" "}
                  {shop.projectdescription}
                </div>
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>PRICE:</strong>{" "}
                  {shop.price}
                </div>
                <Button variant="primary" onClick={() => handleShow(shop._id)}>
                  Leave a review
                </Button>

                <Modal show={state} onHide={() => handleClose(shop._id)}>
                  <Modal.Header closeButton>
                    <Modal.Title>{shop.projecttitle}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                   <Form data-id={shop._id} onSubmit={ handleShopReviewSubmit}>
                 
                   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Leave a Review! </Form.Label>
        <Form.Control onChange={handleShopReviewValueChange} as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>User </Form.Label>
        <Form.Control onChange={handleShopReviewUserChange} as="textarea" rows={1} />
      </Form.Group>
      
      
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
                   </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    
                  </Modal.Footer>
                </Modal>
                
                  {shop.shopreviews.map((shopreviews) => {
                    return (
                      <div>
                        <strong style={{ color: "red" }}>Review:</strong>{" "}
                        {shopreviews.review} <br></br>{" "}
                        <strong style={{ color: "red" }}>From:</strong>{" "}
                        {shopreviews.user} <br></br>{" "}
                      </div>
                    );
                  })}
                

                
                <div>
                  {" "}
                  <strong style={{ color: "red" }}>Shop Rating:</strong>{" "}
                  {shop.rating}
                </div>
                
                  {shop.creator.map((creator) => {
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

export default ShopCards;
