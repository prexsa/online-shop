import Quantity from '../Quantity/Quantity.tsx';

const Table = ({ items }) => {
  return (
    <table style={{ width: '100%' }}>
      <thead>
        <tr style={{ textAlign: 'left', fontWeight: 600, fontSize: 20 }}>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <br />
            <br />
          </td>
        </tr>

        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <div style={{ display: 'flex', flexDirection: 'row', columnGap: '50px' }}>
                  <img style={{ width: '60px' }} src={item.image} alt={item.title} aria-label={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <Quantity />
              </td>
              <td style={{ verticalAlign: 'top', textAlign: 'left' }}>
                <h2>{item.price}</h2>
              </td>
              <td style={{ width: '27px', verticalAlign: 'top' }}>
                <button>X</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
