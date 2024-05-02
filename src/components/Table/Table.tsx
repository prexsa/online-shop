import './table.css';
import TableRow from './TableRow.tsx';
// import { Items } from '../../Items.types.ts';

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

interface ITable {
  items: Items;
  mapQuantityToItem: (val: number) => val;
  removeItemFromCart: (id: number) => id;
}

const Table = ({ items, mapQuantityToItem, removeItemFromCart }: ITable) => {
  // console.log('items; ', items);
  return (
    <table>
      <thead>
        <tr>
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
          // console.log('item: ', item);
          return (
            <tr key={item.id}>
              <TableRow item={item} mapQuantityToItem={mapQuantityToItem} removeItemFromCart={removeItemFromCart} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

// https://www.freecodecamp.org/news/use-typescript-with-react/
// https://blog.logrocket.com/how-to-use-typescript-react-tutorial-examples/
