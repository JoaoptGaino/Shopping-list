import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get('/api/products')
    .then(response => {
        setProducts(response.data);
    })
  },[{}]);
  return (

    <div className="content">
    <h2 class="title">Shopping list</h2>
    <div className="row">
        <div className="col-md-6" id="toBuy">
            Comprar
        </div>
        <div className="col-md-6" id="products">
        {
        products.map(product=>(
          <li draggable>{product.name}</li>
        ))
      }
        </div>
    </div>
    </div>
  );
}

export default Products;
