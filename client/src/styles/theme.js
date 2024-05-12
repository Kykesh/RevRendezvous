// Import necessary utilities from Chakra UI
import { extendTheme } from '@chakra-ui/react';

// Define the colors for your theme
const colors = {
  primary: '#2B6CB0',   // A cooler shade of blue
  secondary: '#F6AD55', // A softer orange
  accent: '#718096',    // Soft gray for less emphasis
  background: '#F0F4F8', // Light grayish background, good for reading
  text: '#2D3748',      // Dark gray for text, better readability
};

// Set up typography for the site
const fonts = {
  heading: `"Inter", sans-serif`,
  body: `"Inter", sans-serif`,
};

// Global styles for broad application
const styles = {
  global: {
    'html, body': {
      color: 'text',
      fontFamily: 'body',
      bg: 'background',
      lineHeight: 'tall',
      fontSize: 'md',
    },
    a: {
      color: 'primary',
      _hover: {
        textDecoration: 'underline',
      },
    },
    h1: { fontSize: '3xl', fontWeight: 'bold' },
    h2: { fontSize: '2xl', fontWeight: 'semibold' },
    h3: { fontSize: 'xl', fontWeight: 'medium' },
  },
};

// Customize components globally
const components = {
  Button: {
    baseStyle: {
      fontWeight: 'medium',
      borderRadius: 'lg',
    },
    sizes: {
      sm: {
        fontSize: 'sm',
        px: 4, // padding horizontal
        py: 2, // padding vertical
      },
      md: {
        fontSize: 'md',
        px: 6,
        py: 3,
      },
    },
    variants: {
      solid: {
        bg: 'primary',
        color: 'white',
        _hover: {
          bg: 'primary',
          opacity: 0.85,
        },
      },
    },
  },
  Card: {
    baseStyle: {
      p: 4,
      shadow: 'md',
      bg: 'white',
      borderRadius: 'lg',
    },
  },
};

// Extend the default theme with your custom settings
const theme = extendTheme({ colors, fonts, styles, components });

export default theme;
