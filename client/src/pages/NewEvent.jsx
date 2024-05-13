import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, useToast, Spinner } from '@chakra-ui/react';
import axios from 'axios';

const NewEventForm = () => {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    location: '',
    eventDescription: '',
    image: '',
    eventFee: '',
    isCharitable: false,
  });
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/events', formData);
      setLoading(false);
      toast({
        title: "Event Created",
        description: "The new event was successfully created!",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      // Reset form or redirect user
      setFormData({
        eventName: '',
        eventDate: '',
        location: '',
        eventDescription: '',
        image: '',
        eventFee: '',
        isCharitable: false,
      });
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "There was a problem creating the event.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={5}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input name="eventName" value={formData.eventName} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Event Date</FormLabel>
          <Input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Location</FormLabel>
          <Input name="location" value={formData.location} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Event Description</FormLabel>
          <Textarea name="eventDescription" value={formData.eventDescription} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Image URL</FormLabel>
          <Input name="image" value={formData.image} onChange={handleChange} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Event Fee</FormLabel>
          <Input type="number" name="eventFee" value={formData.eventFee} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <FormLabel>Is Charitable?</FormLabel>
          <Input type="checkbox" name="isCharitable" isChecked={formData.isCharitable} onChange={handleChange} />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit" isLoading={loading}>
          Create Event
        </Button>
      </form>
    </Box>
  );
};

export default NewEventForm;
