import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';  
import Signup from './pages/Signup';
import ProfilePage from './pages/ProfilePage';


const httpLink = createHttpLink({
  uri: '/graphql', // Ensure this URI is correct for your server
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/signup" element={<Signup />} />  
          <Route path="/profile" element={<ProfilePage />} />
          {/* Define more routes here as needed */}
        </Routes>
    </ApolloProvider>
  );
}

export default App;
