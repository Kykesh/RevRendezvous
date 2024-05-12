import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" width="full" p={4} bgColor="gray.200" textAlign="center">
      <Text>© 2024 RevRendezvous. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
