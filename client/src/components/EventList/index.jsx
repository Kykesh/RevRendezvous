import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../../utils/queries';
import { Box, Text, VStack, Spinner } from '@chakra-ui/react';
import EventListItem from '../EventListItem';

const EventList = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <Box p={4} textAlign="center"><Spinner color="primary" /></Box>;
  if (error) return <Box p={4} color="red.500"><Text>Error: {error.message}</Text></Box>;

  return (
    <VStack spacing={4} align="stretch">
      {data && data.events.length > 0 ? (
        data.events.map(event => (
          <EventListItem key={event._id} event={event} />
        ))
      ) : (
        <Box p={4} textAlign="center">
          <Text>No events to display.</Text>
        </Box>
      )}
    </VStack>
  );
};

export default EventList;
