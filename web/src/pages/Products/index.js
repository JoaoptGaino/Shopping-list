import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'
import './styles.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get('/api/products')
      .then(response => {
        setProducts(response.data);
      })
  }, [{}]);
  return (

    <div className="content">
      <h2 className="title">Shopping list</h2>
      <div className="row">
        <div className="col-md-4" id="toBuy">
          <h1>Comprar</h1>
        </div>
        <div className="col-md-4" id="buttons">
          <h1>Botoes</h1>
          <ul>
            {/* <li><button className="addList">Add to list</button></li> */}
            <li><button className="removeLatest">Remove latest</button></li>
            <li><button className="removeAll">Remove all</button></li>
          </ul>

        </div>
        <div className="col-md-4" id="products">
          <h2>Products</h2>
          {
            products.map(product => (
              <li key={product.id}><FiArrowLeft />{product.name}</li>
            ))
          }
          <Link to="/create-product" className="linkButton">Add new product</Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
