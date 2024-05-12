// src/components/EventList.js
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_EVENTS } from '../../utils/queries';
import { Box, Text, VStack } from '@chakra-ui/react';
import EventListItem from '../EventListItem';

const EventList = () => {
  const { loading, error, data } = useQuery(GET_EVENTS);

  if (loading) return <Box p={4}><Text>Loading...</Text></Box>;
  if (error) return <Box p={4}><Text>Error: {error.message}</Text></Box>;

  return (
    <VStack spacing={4}>
      {data.events.map(event => (
        <EventListItem key={event._id} event={event} />
      ))}
    </VStack>
  );
};

export default EventList;
