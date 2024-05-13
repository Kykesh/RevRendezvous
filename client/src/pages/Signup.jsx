import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
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

function Signup() {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    ridingExperience: '',
    motorcycleDetails: { type: '', engineSize: '' }
  });

  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate();
  const toast = useToast();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!formState.username || !formState.email || !formState.password || !formState.firstName || !formState.lastName) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    try {
      const mutationResponse = await addUser({
        variables: {
          ...formState,
          motorcycleDetails: {
            type: formState.motorcycleDetails.type,
            engineSize: formState.motorcycleDetails.engineSize ? parseInt(formState.motorcycleDetails.engineSize) : null
          }
        }
      });

      Auth.login(mutationResponse.data.addUser.token);
      navigate('/profile');
    } catch (e) {
      toast({
        title: "Signup failed",
        description: e.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "motorcycleType" || name === "engineSize") {
      setFormState(prevState => ({
        ...prevState,
        motorcycleDetails: {
          ...prevState.motorcycleDetails,
          [name]: value
        }
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  return (
    <Box maxW="container.md" mx="auto" p={5}>
      <Link as={RouterLink} to="/login" color="blue.500">← Go to Login</Link>
      <Text fontSize="2xl" mt={2} mb={4}>Signup</Text>
      <form onSubmit={handleFormSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel htmlFor="username">Username:</FormLabel>
            <Input id="username" name="username" placeholder="Your username" onChange={handleChange} value={formState.username} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="firstName">First Name:</FormLabel>
            <Input id="firstName" name="firstName" placeholder="First" onChange={handleChange} value={formState.firstName} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="lastName">Last Name:</FormLabel>
            <Input id="lastName" name="lastName" placeholder="Last" onChange={handleChange} value={formState.lastName} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email:</FormLabel>
            <Input id="email" name="email" type="email" placeholder="youremail@test.com" onChange={handleChange} value={formState.email} />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="pwd">Password:</FormLabel>
            <Input id="pwd" name="password" type="password" placeholder="******" onChange={handleChange} value={formState.password} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="ridingExperience">Riding Experience:</FormLabel>
            <Input id="ridingExperience" name="ridingExperience" placeholder="Years of Experience" onChange={handleChange} value={formState.ridingExperience} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="motorcycleType">Motorcycle Type:</FormLabel>
            <Input id="motorcycleType" name="motorcycleType" placeholder="Type of Motorcycle" onChange={handleChange} value={formState.motorcycleDetails.type} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="engineSize">Engine Size:</FormLabel>
            <Input id="engineSize" name="engineSize" placeholder="Engine Size in CC" onChange={handleChange} value={formState.motorcycleDetails.engineSize} />
          </FormControl>
          <Button type="submit" colorScheme="blue" size="lg" mt={4}>Submit</Button>
        </VStack>
      </form>
    </Box>
  );
}

export default Signup;
