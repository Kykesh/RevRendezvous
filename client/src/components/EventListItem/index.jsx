import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const EventListItem = ({ event }) => {
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      p={4}
      mb={4}
      borderRadius="md"
      boxShadow="sm"
      bg="white"
      overflow="hidden" // Added to handle overflow issues if any
    >
      <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
        <Image
          borderRadius="md"
          src={event.image || "/default_image_path.jpg"} // Ensure you have a valid default path
          alt={event.eventName}
          htmlWidth="100%"
          htmlHeight="200px"
          objectFit="cover"
          flexShrink={0}
          width={{ md: '30%' }} // Responsive image width on medium screens and up
        />
        <Box flex="1">
          <Text fontSize="xl" fontWeight="bold" mb={2}>{event.eventName}</Text>
          <Text fontSize="md" color="gray.600" mb={2}>{new Date(event.eventDate).toLocaleDateString()}</Text>
          <Text fontSize="sm">{event.eventDescription}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default EventListItem;
