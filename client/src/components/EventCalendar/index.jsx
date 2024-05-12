import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const EventCalendar = () => {
  return (
    <Box as="section" p={5} boxShadow="base" rounded="md" bg="white">
      <Heading as="h2" size="lg" mb={4}>Welcome to RevRendezvous</Heading>
    </Box>
  );
};

export default EventCalendar;
