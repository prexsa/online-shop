import { useState, useEffect } from 'react';
import './quantity.css';

interface IQuantity {
  quantity: number;
  setQuantity: () => void;
}

const Quantity = ({ quantity = 1, setQuantity }: IQuantity) => {
  const [value, setValue] = useState(quantity);

  const handleSubtract = () => {
    if (value < 2) return;
    setValue(value - 1);
  };

  const handleAdd = () => {
    if (value >= 10) return;
    setValue(value + 1);
  };

  useEffect(() => {
    setQuantity(value);
  }, [value, setQuantity]);

  return (
    <div className="quantity">
      <button className="minus" aria-label="decrease" onClick={handleSubtract}>
        &minus;
      </button>
      <input
        type="number"
        className="input-box"
        value={value}
        min="1"
        max="10"
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button className="plus" aria-label="increase" onClick={handleAdd}>
        &#43;
      </button>
    </div>
  );
};

export default Quantity;
