import { Box, Flex, Text, Link as ChakraLink, Button, Image } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Flex as="ul" direction="row" align="center" gap="4">
          <li>
            <ChakraLink as={Link} to="/profile" p="2" rounded="md" _hover={{ bg: "blue.100" }}>
              User Profile
            </ChakraLink>
          </li>
          <li>
            <Button onClick={() => Auth.logout()} p="2" rounded="md" bg="red.500" color="white" _hover={{ bg: "red.600" }}>
              Logout
            </Button>
          </li>
        </Flex>
      );
    } else {
      return (
        <Flex as="ul" direction="row" align="center" gap="4">
          <li>
            <ChakraLink as={Link} to="/signup" p="2" rounded="md" _hover={{ bg: "blue.100" }}>
              Signup
            </ChakraLink>
          </li>
          <li>
            <ChakraLink as={Link} to="/login" p="2" rounded="md" _hover={{ bg: "blue.100" }}>
              Login
            </ChakraLink>
          </li>
        </Flex>
      );
    }
  }

  return (
    <Flex as="header" align="center" justify="space-between" p="4" bg="gray.800" color="white">
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
