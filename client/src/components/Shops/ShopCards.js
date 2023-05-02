import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { FormControl, FormLabel, GridItem } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useQuery, useMutation } from "@apollo/client";
import { Shop } from "../utils/queries";
import { Newshopreview } from "../utils/mutations";
// import { Modal } from "@chakra-ui/react";
import { Modal } from "react-bootstrap";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const ClientId =
  "AXHDiIQhvPES-ADJw3Bj-5kaRIpCpo52etwRBW3Jg67xDtyKJYpUGGccESFiPCb39C3dLUS5hCBQU0nW";

function ShopCards(props) {
  const { loading, data } = useQuery(Shop);

  const [shopState, setShow] = useState(getBaseState(data));

  const [addShopReview, { error }] = useMutation(Newshopreview);
  const handleAddToCorrectArray = (_id, shopreviews) => {
    addShopReview({
      shopreviews: { review: reviewValue, user: reviewValue },
      variables: { _id, shopreviews },
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

    handleAddToCorrectArray(event.target.getAttribute("data-id"), {
      review: reviewValue,
      user: reviewUser,
    });
    handleClose(event.target.getAttribute("data-id"));
  };

  const handleClose = (_id) =>
    setShow((prevState) => {
      const newState = { ...prevState };
      newState[_id] = false;
      return newState;
    });
  const handleShow = (_id) =>
    setShow((prevState) => {
      const newState = { ...prevState };
      newState[_id] = true;
      return newState;
    });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  function getBaseState(data) {
    const baseState = {};

    if (!data || !data.shops) {
      console.log();
      return {};
    }

    data.shops.forEach((shopData) => {
      baseState[shopData._id] = false;
    });

    return baseState;
  }

  return (
    <>
      {data.shops.map((shop) => {
        const state = shopState[shop._id];

        return (
          <GridItem w='100%' key={shop.projecttitle}>
            <Card className="project-card-view">
              <Card.Img variant="top" src={`${shop.image}`} alt="card-img" />
              <Card.Body>
                <Card.Title>{shop.projecttitle}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                  <div>
                    {" "}
                    <strong style={{ color: "#0B9FB7" }}>
                      Description:
                    </strong>{" "}
                    {shop.projectdescription}
                  </div>
                  <div>
                    {" "}
                    <strong style={{ color: "red" }}>PRICE:</strong>{" "}
                    {shop.price}
                  </div>
                  <Button
                    variant="primary"
                    onClick={() => handleShow(shop._id)}
                  >
                    Leave a review
                  </Button>

                  <Modal show={state} onHide={() => handleClose(shop._id)}>
                    <Modal.Header closeButton>
                      <Modal.Title>{shop.projecttitle}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <FormControl
                        data-id={shop._id}
                        onSubmit={handleShopReviewSubmit}
                      >
                        <FormControl
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <FormLabel>Leave a Review! </FormLabel>
                          <FormControl
                            onChange={handleShopReviewValueChange}
                            as="textarea"
                            rows={3}
                          />
                        </FormControl>
                        <FormControl
                          className="mb-3"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <FormLabel>User </FormLabel>
                          <FormControl
                            onChange={handleShopReviewUserChange}
                            as="textarea"
                            rows={1}
                          />
                        </FormControl>

                        <Button variant="primary" type="submit">
                          Submit Review
                        </Button>
                      </FormControl>
                    </Modal.Body>
                    <Modal.Footer></Modal.Footer>
                  </Modal>

                  {shop.shopreviews.map((shopreviews) => {
                    return (
                      <div>
                        <strong style={{ color: "#0B82B7" }}>Review:</strong>{" "}
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
                        <strong style={{ color: "#612AF0" }}>
                          This wonderful site was crafted by:
                        </strong>{" "}
                        {creator.username}
                      </div>
                    );
                  })}
                  <PayPalScriptProvider options={{ "client-id": ClientId }}>
                    <PayPalButtons
                      style={{ layout: "horizontal", color: "silver" }}
                      createOrder={(data, actions) => {
                        return actions.order
                          .create({
                            purchase_units: [
                              {
                                amount: {
                                  value: shop.price,
                                },
                              },
                            ],
                          })
                          .then((orderId) => {
                            // Your code here after create the order
                            return orderId;
                          });
                      }}
                    />
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
                            
                            value: shop.price,
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
            </div>{" "}
          </GridItem>
        );
      })}
    </>
  );
}

export default ShopCards;
