import { useState } from 'react';
import Quantity from '../Quantity/Quantity.tsx';
import { Items } from '../../Items.types.ts';

interface ITableRow {
  item: Items;
  mapQuantityToItem: (val: number) => void;
  removeItemFromCart: (id: number) => void;
}

const TableRow = ({ item, mapQuantityToItem, removeItemFromCart }: ITableRow) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const addItemQuantity = (val) => {
    item.quantity = val;
    mapQuantityToItem(item);
    setQuantity(val);
  };

  return (
    <>
      <td>
        <div className="td-item-details">
          <img src={item.image} alt={item.title} aria-label={item.title} />
          <div>
            <h4>{item.title}</h4>
          </div>
        </div>
      </td>
      <td>
        <Quantity quantity={item.quantity} setQuantity={addItemQuantity} />
      </td>
      <td>
        <h2>
          {quantity} X ${item.price}
        </h2>
      </td>
      <td>
        <button onClick={() => removeItemFromCart(item.id)}>X</button>
      </td>
    </>
  );
};

export default TableRow;
