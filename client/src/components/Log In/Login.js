import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

import { Input, Stack, Center, Box, Button, Heading } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
// import { Container, Row, Col } from "react-bootstrap";

//Projects cards and page, this we can literally rinse and repeat for all pages
// function Login() {
//   return (
//     <Container fluid className="project-section">
//       <Box borderRadius='lg'color='gray.50'>
//         <Stack spacing={3} pt="50px" pb="400px">
//         <Heading color="white" pb="25px" as='h3' size='lg'>Sign into your account!</Heading>
//           <Center>
//               <Input h="40px" w="400px" placeholder='Username' size='lg' />
//             </Center>
//           <Center>
//               <Input h="40px" w="400px" placeholder='Password' size='lg' />
//             </Center>
//             <Center>
//               <Button h="40px" w="400px">Sign In</Button>
//             </Center>
//         </Stack>
//       </Box>
//     </Container>
//   );
// }

const Login = (props) => {
  const [formState, setFormState] = useState({ userName: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      // console.error(e);
    }

    // clear form values
    setFormState({
      userName: '',
      password: '',
    });
  };

  return (
    <Stack spacing={3} pl="170px" pt="170px" pb="480px">
    <main className="flex-row justify-center mb-3">
      <div className="col-8 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <Input h="40px" w="400px"
                  className="form-input"
                  placeholder="Your username"
                  name="userName"
                  type="userName"
                  value={formState.userName}
                  onChange={handleChange}
                />
                <Input h="40px" w="400px"
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
    </Stack>
  );
};

export default Login;
