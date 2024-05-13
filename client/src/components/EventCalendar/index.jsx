import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const EventCalendar = () => {
  return (
    <Box as="section" p={5} boxShadow="base" rounded="md" bg="primary" color="white">
      <Heading as="h2" size="lg" mb={4}>Welcome to RevRendezvous</Heading>
      <Text fontSize="md" opacity={0.8}>
        Explore exciting events and connect with others!
      </Text>
      {/* Here you can add a calendar view or list upcoming events */}
    </Box>
  );
};

export default EventCalendar;
