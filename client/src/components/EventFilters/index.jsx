import React from 'react';
import { Box, Button, Stack } from '@chakra-ui/react';

const EventFilters = () => {
  return (
    <Box as="section" p={4} boxShadow="sm" bg="primary" rounded="md" color="white">
      <Stack direction="row" spacing={4}>
        <Button colorScheme="teal" variant="solid">Event Filter File</Button>
        <Button colorScheme="teal" variant="outline">Another Filter</Button>
        {/* More filters as needed */}
      </Stack>
    </Box>
  );
};

export default EventFilters;
