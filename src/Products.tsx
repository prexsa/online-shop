/* eslint-disable */
import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';

export async function loader() {
  const resp = await axios.get('https://fakestoreapi.com/products');
  return { products: resp.data };
}

export default function Products() {
  const [categories, setCategories] = useState([]);
  const { products } = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <h2>Simple Online Store</h2>
      <label htmlFor="categories" aria-label="product category">
        Select a category:
      </label>
      <select name="categories" id="categories">
        {categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category}
            </option>
          );
        })}
      </select>
      <div className="product-listItem">
        {products.map((item) => {
          const { id, description, image, title, price, rating, category } = item;
          return (
            <div className="card-container" key={id} style={{ width: '200px' }}>
              <img src={image} width="150px" height="150px" alt={title} />
              <div className="item-title">{title}</div>
              {/*<div>{description}</div>*/}
              <div>${price}</div>
              <div className="card-footer">
                <button className="select-btn" onClick={() => navigate(`product/${id}`, { state: item })}>
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
