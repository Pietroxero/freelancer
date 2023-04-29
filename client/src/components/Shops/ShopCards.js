import React from "react";
import Card from "react-bootstrap/Card";
import { useQuery } from "@apollo/client";
import { Shop } from "../utils/queries";


function ShopCards(props) {
  
  console.log(props, "props");
  const { loading, error, data } = useQuery(Shop);
  console.log(error, "error");
  console.log(data, "data");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

 

  return (
    <div>
      {data.shops.map((shop) => {

        return(<Card key={shop.projecttitle} className="project-card-view">
          <Card.Img variant="top" src={`${shop.image}`} alt="card-img" />
          <Card.Body>
            <Card.Title>{shop.projecttitle}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              <p> <strong style={{color: "red"}}>Description:</strong> {shop.projectdescription}</p>
              <p> <strong style={{color: "red"}}>PRICE:</strong> {shop.price}</p>
              <p>
                {shop.shopreviews.map((shopreviews) => {
                  return (
                    <p>
                     <strong style={{color: "red"}}>Review:</strong>  {shopreviews.review} <br></br>  <strong style={{color: "red"}}>From:</strong> {shopreviews.user}
                    </p>
                  );
                })}
              </p>
              <p> <strong style={{color: "red"}}>Shop Rating:</strong> {shop.rating}</p>
              <p>
                {shop.creator.map((creator) => {
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

export default ShopCards;
