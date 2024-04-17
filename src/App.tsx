import { useState, useEffect } from 'react';
import { Outlet, Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import './App.css';

export async function loader() {
  // const products = await getProducts();
  const resp = await axios.get('https://fakestoreapi.com/products');
  return { products: resp.data };
}

function App() {
  // const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const { products } = useLoaderData();
  /*
  useEffect(() => {
    const asyncCall = async () => {
      const resp = await axios.get('https://fakestoreapi.com/products');
      console.log(resp);
      setProducts([...resp.data]);
      const categories = [...new Set(resp.data.map((item) => item.category))];
      console.log(categories);
      setCategories(categories);
    };
    asyncCall();
  }, []);
  */

  return (
    <div>
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

      <div className="product-list-container">
        {products.map((item) => {
          const { id, description, image, title, price, rating, category } = item;
          return (
            <div key={id} style={{ width: '200px' }}>
              <Link to={`product/${id}`}>
                <img src={image} width="150px" height="150px" alt={title} />
                <div>{title}</div>
                {/*<div>{description}</div>*/}
                <div>${price}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// https://fakestoreapi.com/
// https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Simple-Online-Store.md
