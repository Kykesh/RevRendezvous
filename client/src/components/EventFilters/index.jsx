import React from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';

const EventFilters = () => {
  return (
    <Box as="section" p={4} boxShadow="sm" bg="gray.50" rounded="md">
      <Stack direction="row" spacing={4}>
        <Button colorScheme="blue">Event Filter File</Button>
        <Button colorScheme="blue">Another Filter</Button>
        {/* More filters as needed */}
      </Stack>
    </Box>
  );
};

export default EventFilters;
