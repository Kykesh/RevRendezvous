import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';

const EventListItem = ({ event }) => {
  return (
    <Box border="1px solid gray" p={4} mb={2} borderRadius="md">
      <Text fontSize="lg" fontWeight="bold">{event.eventName}</Text>
      <Text mb={2}>{new Date(event.eventDate).toLocaleDateString()}</Text>
      <Image borderRadius="md" src={event.image || "default_image_path.jpg"} alt={event.eventName} />
      <Text fontSize="sm">{event.eventDescription}</Text>
    </Box>
  );
};

export default EventListItem;
