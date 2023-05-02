import React from "react";
import {Container, Grid, GridItem, Flex} from '@chakra-ui/react';
// import { Container, Row, Col } from "react-bootstrap";
import ShopCards from "./ShopCards";

function Shops() {

  

  return (
    
    <>
   
    <Container fluid className="project-section">
   
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Shopping Sites: </strong>
        </h1>

      

        <p style={{ color: "white" }}>
          These colorful Blog sites can be yours for a small fee!
        </p>
        <Grid templateColumns='repeat(3, 1fr)'>
  
            <ShopCards
            />
         

       </Grid>
      </Container>
    </Container></>
  );
}




export default Shops;
