import React from 'react';
import { Box, Text, Image, VStack, HStack } from '@chakra-ui/react';

const ProfilePage = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
        <HStack spacing={4}>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/path/to/default/profile/image.jpg" // Placeholder image path
            alt="Profile image"
          />
          <VStack align="stretch">
            <Text fontSize="2xl">FirstName LastName</Text>
            <Text fontSize="xl">@Username</Text>
            <Text>Email: email@example.com</Text>
            <Text>Moto Details: Bike Type - Engine Size</Text>
            <Text>Riding Experience: Experience Level</Text>
            <Text>Preferences: User Preferences</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
};

export default ProfilePage;
