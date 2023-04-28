import React from "react";
import { Input, Stack, Center, Box, Button, Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
// import { Container, Row, Col } from "react-bootstrap";

//Projects cards and page, this we can literally rinse and repeat for all pages
function Login() {
  return (
    <Container fluid className="project-section">
      <Box borderRadius='lg'color='gray.50'>
        <Stack spacing={3} pt="50px" pb="400px">
        <Heading color="white" pb="25px" as='h3' size='lg'>Sign into your account!</Heading>
          <Center>
              <Input h="40px" w="400px" placeholder='Username' size='lg' />
            </Center>
          <Center>
              <Input h="40px" w="400px" placeholder='Password' size='lg' />
            </Center>
            <Center>
              <Button h="40px" w="400px">Sign In</Button>
            </Center>
        </Stack>
      </Box>
    </Container>
  );
}

export default Login;
