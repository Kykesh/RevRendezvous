import { Box, Flex, Text, Link as ChakraLink, Button, useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const linkHoverBg = useColorModeValue("blue.100", "blue.700");
  const navbarBg = useColorModeValue("gray.800", "gray.900");
  const buttonBg = useColorModeValue("red.500", "red.600");
  const buttonHoverBg = useColorModeValue("red.600", "red.700");
  const createEventBg = useColorModeValue("green.500", "green.600");
  const createEventHoverBg = useColorModeValue("green.600", "green.700");

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Flex as="ul" direction="row" align="center" gap="4">
          <li>
            <ChakraLink as={Link} to="/profile" p="2" rounded="md" _hover={{ bg: linkHoverBg }}>
              User Profile
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={Link} to="/create-event" p="2" rounded="md" bg={createEventBg} color="white" _hover={{ bg: createEventHoverBg }}>
              Create Event
            </ChakraLink>
          </li>
          <li>
            <Button onClick={() => Auth.logout()} p="2" rounded="md" bg={buttonBg} color="white" _hover={{ bg: buttonHoverBg }}>
              Logout
            </Button>
          </li>
        </Flex>
      );
    } else {
      return (
        <Flex as="ul" direction="row" align="center" gap="4">
          <li>
            <ChakraLink as={Link} to="/signup" p="2" rounded="md" _hover={{ bg: linkHoverBg }}>
              Signup
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={Link} to="/login" p="2" rounded="md" _hover={{ bg: linkHoverBg }}>
              Login
            </ChakraLink>
          </li>
        </Flex>
      );
    }
  }

  return (
    <Flex as="header" align="center" justify="space-between" p="4" bg={navbarBg} color="white">
      <Text fontSize="lg" fontWeight="bold">
        <ChakraLink as={Link} to="/" display="flex" alignItems="center">
          <FontAwesomeIcon icon={faMotorcycle} size="lg" style={{ marginRight: '10px' }} /> R/R
        </ChakraLink>
      </Text>

      <nav>
        {showNavigation()}
      </nav>
    </Flex>
  );
}

export default Nav;
