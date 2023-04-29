import React from "react";
import Card from "react-bootstrap/Card";


import { useQuery } from "@apollo/client";
import { Social } from "../utils/queries";




function SocialCards(props) {
  
  console.log(props, "props");
  const { loading, error, data } = useQuery(Social);
  console.log(error, "error");
  console.log(data, "data");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

 

  return (
    <div>
      {data.socials.map((social) => {

        return(<Card key={social.projecttitle} className="project-card-view">
          <Card.Img variant="top" src={`${social.image}`} alt="card-img" />
          <Card.Body>
            <Card.Title>{social.projecttitle}</Card.Title>
            <Card.Text style={{ textAlign: "justify" }}>
              <p> <strong style={{color: "red"}}>Description:</strong> {social.projectdescription}</p>
              <p> <strong style={{color: "red"}}>PRICE:</strong> {social.price}</p>
              <p>
                {social.socialreviews.map((socialreviews) => {
                  return (
                    <p>
                     <strong style={{color: "red"}}>Review:</strong>  {socialreviews.review} <br></br>  <strong style={{color: "red"}}>From:</strong> {socialreviews.user}
                    </p>
                  );
                })}
              </p>
              <p> <strong style={{color: "red"}}>Social Rating:</strong> {social.rating}</p>
              <p>
                {social.creator.map((creator) => {
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

export default SocialCards;
