import React, { useEffect, useState } from 'react';
import axios from 'axios';
import api from './services/api';
import './App.css';

const App = () => {
  //const [products, setProducts] = useEffect([]);
  useEffect(() => {
    api.get('/api/products').then(response => {
      console.log(response.data)
    })
  })
  return (

    <div className="App">
      <h1>Fala fiote</h1>
    </div>
  );
}

export default App;
