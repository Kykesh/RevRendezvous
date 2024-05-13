import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

const MainEventBanner = () => {
  return (
    <Box as="section" p={5} bg="primary" color="white" textAlign="center">
      <Heading as="h1" size="xl" mb={4}>
        Upcoming Events
      </Heading>
      {/* Additional banner content here */}
    </Box>
  );
};

export default MainEventBanner;
