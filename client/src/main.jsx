import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import theme from './styles/theme';  // Ensure the path to your theme file is correct

// Your main.jsx stays streamlined and simply mounts the App component
const router = createBrowserRouter([
  {
    path: '/*',  // Using '/*' to handle all subroutes in App
    element: <App />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  
);
