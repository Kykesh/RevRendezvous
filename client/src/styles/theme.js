import { extendTheme } from '@chakra-ui/react';

// Define the updated colors for your theme
const colors = {
  primary: '#285E61', // A deep teal for a professional and modern look
  secondary: '#DD6B20', // A warm, vivid orange for accenting interactive elements
  accent: '#718096', // Soft gray for less emphasis and subtle contrasts
  background: '#F7FAFC', // Light gray background for a clean and airy feel
  text: '#1A202C', // Dark gray for enhanced readability and focus
};

// Maintain the typography with a focus on modern, readable sans-serif fonts
const fonts = {
  heading: `"Inter", sans-serif`,
  body: `"Inter", sans-serif`,
};

// Update global styles to enhance readability and visual comfort
const styles = {
  global: {
    'html, body': {
      color: 'text',
      fontFamily: 'body',
      bg: 'background',
      lineHeight: 'tall',
      fontSize: 'md',
      padding: '4', // Consistent padding across all devices
    },
    a: {
      color: 'primary',
      _hover: {
        textDecoration: 'none',
        opacity: 0.8,
      },
    },
    h1: { fontSize: '4xl', fontWeight: 'bold' },
    h2: { fontSize: '3xl', fontWeight: 'bold' },
    h3: { fontSize: '2xl', fontWeight: 'medium' },
  },
};

// Customize components for a unified and minimalist design
const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
      _focus: { boxShadow: 'none' }, // Removes focus outline for a cleaner look
    },
    sizes: {
      sm: {
        fontSize: 'sm',
        px: 4,
        py: 2,
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
          opacity: 0.9,
        },
      },
    },
  },
  Card: {
    baseStyle: {
      p: 4,
      shadow: 'sm',
      bg: 'white',
      borderRadius: 'md',
      borderWidth: '1px',
      borderColor: 'gray.200',
    },
  },
  Input: {
    variants: {
      outline: {
        field: {
          _focus: {
            borderColor: 'primary',
            boxShadow: '0 0 0 1px var(--chakra-colors-primary)',
          }
        }
      }
    }
  },
  Link: {
    baseStyle: {
      _hover: {
        textDecoration: 'none',
        color: 'secondary',
      }
    }
  },
};

// Extend the default theme with your custom settings
const theme = extendTheme({ colors, fonts, styles, components });

export default theme;
