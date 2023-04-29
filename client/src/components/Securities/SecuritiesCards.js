import React from "react";
import Card from "react-bootstrap/Card";
import { useQuery } from "@apollo/client";
import { Securitys } from "../utils/queries";


function SecurityCards(props) {
  
  console.log(props, "props");
  const { loading, error, data } = useQuery(Securitys);
  console.log(error, "error");
  console.log(data, "data");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

 

  return (
    <div>
      {data.securitys.map((security) => {

        return(<Card key={security.projecttitle} className="project-card-view">
          <Card.Img variant="top" src={`${security.image}`} alt="card-img" />
          <Card.Body>
            <Card.Title>{security.projecttitle}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              <p> <strong style={{color: "red"}}>Description:</strong> {security.projectdescription}</p>
              <p> <strong style={{color: "red"}}>PRICE:</strong> {security.price}</p>
              <p>
                {security.securityreviews.map((securityreviews) => {
                  return (
                    <p>
                     <strong style={{color: "red"}}>Review:</strong>  {securityreviews.review} <br></br>  <strong style={{color: "red"}}>From:</strong> {securityreviews.user}
                    </p>
                  );
                })}
              </p>
              <p> <strong style={{color: "red"}}>security Rating:</strong> {security.rating}</p>
              <p>
                {security.creator.map((creator) => {
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

export default SecurityCards;
