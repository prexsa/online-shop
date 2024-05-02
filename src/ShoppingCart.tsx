/* eslint-disable */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from './components/Table/Table.tsx';
// import { Items } from './Items.types.ts';

export interface Items {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  rating: {
    rate: number;
    count: number;
  };
  title: string;
  totalSum: number;
}

export default function ShoppingCart() {
  const navigate = useNavigate();
  const [items, setItems] = useState<Items[]>([]);
  const [total, setTotal] = useState<number>(0);

  const mapQuantityToItem = (productItem: { quantity: number; id: number }) => {
    for (let item of items) {
      if (item.id === productItem.id) {
        item.quantity = productItem.quantity;
      }
    }
    setItems(items);
    calculateTotalSum(items);
  };

  const calculateTotalSum = (items: { items: Items[] }) => {
    const totalSum = items.reduce((total, cv) => {
      return (total += Number(cv.price) * Number(cv.quantity));
    }, 0);
    setTotal(totalSum.toFixed(2));
  };

  const removeItemFromCart = (id) => {
    const filtered = items.filter((item) => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(filtered));
    setItems(filtered);
  };

  /*const parseForIdQuantityPrice = (items: { items: object[] }) => {
    return items.map((item: { item: object }) => {
      return { id: item.id, quantity: item.quantity, price: item.price };
    });
  };*/

  const cancelOrder = () => {
    localStorage.setItem('cart', '');
    setItems([]);
    setTotal(0);
  };

  useEffect(() => {
    let cartItems = localStorage.getItem('cart') || '';

    if (cartItems === '') return;
    cartItems = JSON.parse(cartItems);
    setItems(cartItems);
    calculateTotalSum(cartItems);
  }, []);

  if (items.length <= 0) {
    return (
      <div>
        <h2>Shopping cart is empty!</h2>
        <button onClick={() => navigate('/')}>See products</button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <button onClick={() => navigate('/')}>Back to products</button>
      </div>
      <h3 style={{ fontWeight: 500, display: 'flex', marginLeft: 0, marginBottom: '25px' }}>Shopping cart</h3>
      <div
        style={{
          display: 'flex',
          padding: '0 10px',
          borderRadius: '8px',
          rowGap: '10px',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
            width: '100%',
            marginRight: '10px',
          }}
        >
          <Table items={items} mapQuantityToItem={mapQuantityToItem} removeItemFromCart={removeItemFromCart} />
        </div>
        <div
          style={{
            width: '250px',
            backgroundColor: '#ffffff',
            padding: '20px',
            borderRadius: '8px',
          }}
        >
          <h4>Order Summary</h4>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 0' }}>
              <div>Subtotal</div>
              <div>${total}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 0' }}>
              <div>Tax</div>
              <div>$1.23</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px 0' }}>
              <div>Shipping</div>
              <div>$5.99</div>
            </div>
          </div>
          <hr />
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <div>Total</div>
            <div>${total}</div>
          </div>
          <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
            <button>Place order</button>
            <button onClick={cancelOrder}>Cancel order</button>
            <button onClick={() => navigate('/')}>continue shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// https://dribbble.com/shots/23265949--058-DailyUI-Shopping-Cart
// https://www.w3schools.com/howto/howto_js_snackbar.asp
