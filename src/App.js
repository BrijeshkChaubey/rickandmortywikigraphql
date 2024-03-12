// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Card/CardDetails';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />

          <Route path="/episodes" element={<Episodes />} />
          <Route path="/episodes/:id" element={<CardDetails />} />

          <Route path="/location" element={<Location />} />
          <Route path="/location/:id" element={<CardDetails />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
