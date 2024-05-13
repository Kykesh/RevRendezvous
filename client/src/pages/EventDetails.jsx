import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { Box, Image, Link, Text, VStack, Spinner, Heading } from '@chakra-ui/react';

import { GET_EVENTS } from '../utils/queries';
import spinnerImage from '../assets/spinner.gif';

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_EVENTS);
  const [currentEvent, setCurrentEvent] = useState(null);

  useEffect(() => {
    if (data) {
      const foundEvent = data.events.find(event => event._id === id);
      setCurrentEvent(foundEvent);
    }
  }, [data, id]);

  if (loading) {
    return <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />;
  }

  if (!currentEvent) {
    return <Text fontSize="lg" p={5}>No event found.</Text>;
  }

  return (
    <Box maxW="container.md" mx="auto" p={5}>
      <Link as={RouterLink} to="/" color="blue.500" mb={2}>← Back to Events</Link>
      <VStack spacing={4} align="stretch">
        <Heading as="h2">{currentEvent.eventName}</Heading>
        <Text>{currentEvent.eventDescription}</Text>
        <Text><strong>Date:</strong> {new Date(currentEvent.eventDate).toLocaleDateString()}</Text>
        <Text><strong>Location:</strong> {currentEvent.location}</Text>
        <Text><strong>Fee:</strong> ${currentEvent.eventFee} {currentEvent.isCharitable ? "(Charitable)" : ""}</Text>

        {currentEvent.host && (
          <Text>Hosted by: {currentEvent.host.username}</Text>
        )}
        
        {currentEvent.image && (
          <Image src={`/images/${currentEvent.image}`} alt={currentEvent.eventName} />
        )}
      </VStack>
    </Box>
  );
}

export default Detail;
