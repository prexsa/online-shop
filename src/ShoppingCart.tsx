import { useState, useEffect } from 'react';
import Table from './components/Table/Table.tsx';

export default function ShoppingCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cart'));
    setItems(items);
  }, []);

  if (items.length <= 0) return <div>Shopping cart is empty!</div>;

  return (
    <div>
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
          <Table items={items} />
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
              <div>$1234</div>
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
            <div>$2345</div>
          </div>
          <div style={{ marginTop: '50px', display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
            <button>Place order</button>
            <p>continue shopping</p>
          </div>
        </div>
      </div>
    </div>
  );
}
