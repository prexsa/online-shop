/* eslint-disable */
// import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

import './App.css';

function App() {
  const navigate = useNavigate();
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
      <div className="fixed-top-bar">
        <div className="top-bar-nav">
          <button className="cart-btn" onClick={() => navigate('/cart')}>
            Cart
          </button>
        </div>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;

// https://fakestoreapi.com/
// https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Simple-Online-Store.md
