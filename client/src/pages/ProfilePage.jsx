import React from 'react';
import { Box, Text, Image, VStack, HStack, Divider } from '@chakra-ui/react';

const ProfilePage = () => {
  // Example user data - you might fetch these from an API or context in a real app
  const profile = {
    firstName: "FirstName",
    lastName: "LastName",
    username: "@Username",
    email: "email@example.com",
    motoDetails: {
      bikeType: "Bike Type",
      engineSize: "Engine Size"
    },
    ridingExperience: "Experience Level",
    preferences: "User Preferences"
  };

  return (
    <Box maxW="container.md" mx="auto" p={5}>
      <VStack spacing={4} align="stretch">
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <HStack spacing={4}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="/path/to/default/profile/image.jpg" // Replace with actual image path
              alt="Profile image"
            />
            <VStack align="stretch" flex="1" spacing={3}>
              <Text fontSize="2xl">{profile.firstName} {profile.lastName}</Text>
              <Text fontSize="xl">{profile.username}</Text>
              <Divider />
              <Text>Email: {profile.email}</Text>
              <Text>Moto Details: {profile.motoDetails.bikeType} - {profile.motoDetails.engineSize}</Text>
              <Text>Riding Experience: {profile.ridingExperience}</Text>
              <Text>Preferences: {profile.preferences}</Text>
            </VStack>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default ProfilePage;
