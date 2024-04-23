/* eslint-disable */
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StarRating from './components/StarRating/StarRating.tsx';

export default function ProductItem() {
  const location = useLocation();
  const navigate = useNavigate();
  const [addToCart, setAddToCart] = useState([]);
  const { state } = location;
  const {
    category,
    description,
    id,
    image,
    price,
    rating: { rate, count },
    title,
  } = state;
  // console.log(item);
  /*
  const saveItemToIndexedDB = () => {
    const request = window.indexedDB.open('cart');
    console.log(request);
    request.onerror = (event) => {
      // request.errorCode
      console.error(event);
    };
    request.onsuccess = (event) => {
      // request.result
      console.log(event);
    };
  };

  saveItemToIndexedDB();*/

  const handleAddToCart = () => {
    setAddToCart([...addToCart, state]);
    let cart = localStorage.getItem('cart');
    // console.log(cart);
    if (cart !== null) {
      const parsed = JSON.parse(cart);
      const isFound = parsed.filter((item) => item.id === id);
      if (isFound.length > 0) return;
      parsed.push(state);
      localStorage.setItem('cart', JSON.stringify(parsed));
    } else {
      localStorage.setItem('cart', JSON.stringify([state]));
    }
  };

  console.log(addToCart);

  return (
    <>
      <div className="back-btn-wrapper">
        <button className="back-btn" onClick={() => navigate('/')}>
          back
        </button>
      </div>
      <div className="item-card">
        <div>
          <img src={image} width="250px" alt={title} aria-label={title} />
        </div>
        <div className="item-description">
          <div>
            <div className="item-meta">
              <h1 className="title">{title}</h1>
              <div className="ratings-wrapper">
                <p className="rating-value">{rate}</p>
                <StarRating rating={'4.5'} />
              </div>
            </div>

            <hr />
            <div className="item-meta">
              Price: <span className="price">${price}</span>
            </div>
            <div className="item-meta">
              <h4>Description</h4>
              <p className="description">{description}</p>
            </div>
            <div className="item-meta">
              <h4>Category</h4>
              <p>{category}</p>
            </div>
          </div>
          <div className="add-item-to-cart">
            <button onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
      <br />
      <div>
        <button onClick={() => navigate('/')}>See more product</button>
      </div>
    </>
  );
}

// https://ishadeed.com/article/star-rating-svg/
