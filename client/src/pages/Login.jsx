import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  VStack,
  Text,
  useToast
} from '@chakra-ui/react';

function Login() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { loading }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();
  const toast = useToast();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password }
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token); // Handles session setting
      navigate('/profile');
    } catch (e) {
      toast({
        title: "Login failed",
        description: e.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Box maxW="container.md" mx="auto" p={5}>
      <Link as={RouterLink} to="/signup" color="blue.500">← Go to Signup</Link>
      <Text fontSize="2xl" mt={2} mb={4}>Login</Text>
      <VStack as="form" onSubmit={handleFormSubmit} spacing={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email address:</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="youremail@test.com"
            onChange={handleChange}
            value={formState.email}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="password">Password:</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="******"
            onChange={handleChange}
            value={formState.password}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" size="lg" mt={4} isLoading={loading}>Submit</Button>
      </VStack>
    </Box>
  );
}

export default Login;
