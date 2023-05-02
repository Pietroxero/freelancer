import React from "react";
import {Container, Grid, GridItem, Flex} from '@chakra-ui/react';
import SecurityCards from "./SecuritiesCards";
// import Particle from "../Particle";






//Projects cards and page, this we can literally rinse and repeat for all pages
function Securities() {

  

  return (
    
    <>
   
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
           <strong className="purple">Security: </strong>
        </h1>

      

        <p style={{ color: "white" }}>
          These colorful Blog sites can be yours for a small fee!
        </p>
        <Grid templateColumns='repeat(3, 1fr)'>
  
            <SecurityCards
            />
         

          {/* <div className="project-card">
      
    </div> */}

       </Grid>
      </Container>
    </Container></>

       
    
  );
}




export default Securities;
